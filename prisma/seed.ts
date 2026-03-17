import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const adminEmail = 'admin@example.com'
  const adminPassword = 'admin123'
  const passwordHash = await bcrypt.hash(adminPassword, 10)

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { updatedAt: new Date() },
    create: {
      email: adminEmail,
      name: 'Administrator',
      role: 'ADMIN',
      passwordHash,
      updatedAt: new Date(),
    }
  })

  await prisma.client.create({
    data: {
      name: 'Klient Alfa',
      email: 'alfa@firma.pl',
      phone: '+48 123 456 789',
      updatedAt: new Date(),
    }
  })

  await prisma.client.create({
    data: {
      name: 'Klient Beta',
      email: 'beta@firma.pl',
      updatedAt: new Date(),
    }
  })

  await prisma.publisher.create({
    data: {
      name: 'Wydawnictwo Meridian',
      email: 'kontakt@meridian.pl',
      phone: '+48 501 200 300',
      city: 'Warszawa',
      address: 'ul. Przykładowa 12',
      postalCode: '00-123',
      nip: '5252800011',
      regon: '146543210',
      notes: 'Przykładowy wydawca seeded w bazie.',
      updatedAt: new Date(),
    }
  })

  await prisma.publisher.create({
    data: {
      name: 'Nova Press',
      email: 'biuro@novapress.pl',
      phone: '+48 503 111 222',
      city: 'Kraków',
      address: 'ul. Książkowa 7',
      postalCode: '30-001',
      nip: '6762456789',
      regon: '123456789',
      updatedAt: new Date(),
    }
  })

  await prisma.publisher.create({
    data: {
      name: 'Baltic Books',
      email: 'hello@balticbooks.pl',
      phone: '+48 577 222 444',
      city: 'Gdańsk',
      address: 'ul. Morska 45',
      postalCode: '80-100',
      nip: '5842765432',
      regon: '987654321',
      updatedAt: new Date(),
    }
  })

  // Generate many sample invoices for all clients
  const clients = await prisma.client.findMany()
  const invoicesData: any[] = []
  const now = new Date()

  function seededRandom(seed: number) {
    let t = seed + 0x6D2B79F5
    return function() {
      t += 0x6D2B79F5
      let r = Math.imul(t ^ t >>> 15, 1 | t)
      r ^= r + Math.imul(r ^ r >>> 7, 61 | r)
      return ((r ^ r >>> 14) >>> 0) / 4294967296
    }
  }

  for (const c of clients) {
    const rand = seededRandom(c.id)
    // 24 issued (past), 12 planned (future) => 36 total
    for (let i = 0; i < 36; i++) {
      const isPlanned = i >= 24
      const monthsOffset = isPlanned ? -(i - 23) : (i + 1)
      const issue = new Date(now)
      issue.setMonth(issue.getMonth() - (isPlanned ? -monthsOffset : monthsOffset))
      // For planned invoices push into future
      if (isPlanned) issue.setMonth(issue.getMonth() + (i - 23))
      const payment = new Date(issue)
      payment.setDate(payment.getDate() + Math.floor(7 + rand()*30))
      const net = Math.round((100 + rand()*5000) * 100) / 100
      const vatPerc = [0,5,8,23][Math.floor(rand()*4)]
      const vat = Math.round(net * (vatPerc/100) * 100) / 100
      const gross = Math.round((net + vat) * 100) / 100
      invoicesData.push({
        clientId: c.id,
        title: `${isPlanned ? 'Planowana' : 'Faktura'} ${c.id}-${i+1}`,
        issueDate: issue,
        paymentDate: payment,
        net,
        vatPerc,
        vat,
        gross,
        status: isPlanned ? 'planned' : 'issued',
        updatedAt: new Date(),
      })
    }
  }

  // Bulk insert (use prisma as any until prisma generate is run locally)
  await (prisma as any).invoice.createMany({ data: invoicesData })

    // Seed role permissions
    const modules = [
      'dashboard',
      'contacts',
      'customers',
      'publishers',
      'authors',
      'documents',
      'invoices',
      'simple-invoices',
      'cashflow',
      'finances',
      'users',
      'permissions',
      'languages',
      'administration',
      'countries',
      'currencies',
      'language-dictionary',
    ]
  for (const module of modules) {
    await prisma.rolePermissions.upsert({
      where: { module },
      update: {},
      create: {
        module,
        userAccess: false,
        advancedAccess: false,
        adminAccess: true,
        updatedAt: new Date(),
      }
    })
  }

  console.log('Seed completed. Admin: admin@example.com / admin123')
}

main().catch(async (e) => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
