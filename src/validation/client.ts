import { z } from 'zod'

const baseFields = {
  name: z.string().min(2, 'Nazwa min. 2 znaki'),
  abbreviation: z.string().max(20, 'Skrót zbyt długi').optional().or(z.literal('')),
  email: z.string().email('Nieprawidłowy email').optional().or(z.literal('')),
  phone: z.string().max(32, 'Telefon zbyt długi').optional().or(z.literal('')),
  fax: z.string().max(32, 'Fax zbyt długi').optional().or(z.literal('')),
  www: z.string().max(200, 'WWW zbyt długi').optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
  address2: z.string().optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
  state: z.string().max(10, 'Stan zbyt długi').optional().or(z.literal('')),
  postalCode: z.string().max(10, 'Kod pocztowy zbyt długi').optional().or(z.literal('')),
  country: z.string().optional().or(z.literal('')),
  language: z.string().max(10, 'Język zbyt długi').optional().or(z.literal('')),
  legalForm: z.string().optional().or(z.literal('')),
  nip: z.string().max(20, 'NIP zbyt długi').optional().or(z.literal('')),
  vatId: z.string().max(30, 'VAT ID zbyt długi').optional().or(z.literal('')),
  regon: z.string().max(20, 'REGON zbyt długi').optional().or(z.literal('')),
  jurisdiction: z.string().optional().or(z.literal('')),
  status: z.string().max(2).optional().or(z.literal('')),
  notes: z.string().optional().or(z.literal('')),
  bankAccount: z.string().optional().or(z.literal('')),
  bankName: z.string().optional().or(z.literal('')),
  bankAddress: z.string().optional().or(z.literal('')),
  bankRoutingNo: z.string().optional().or(z.literal('')),
  bankAccountName: z.string().optional().or(z.literal('')),
  commission: z.coerce.number().min(0).max(100).optional().nullable(),
  commissionForeign: z.coerce.number().min(0).max(100).optional().nullable(),
  commissionMaterials: z.coerce.number().min(0).max(100).optional().nullable(),
  repModeId: z.coerce.number().int().optional().nullable(),
  parentId: z.coerce.number().int().optional().nullable(),
}

export const ClientCreateSchema = z.object(baseFields)

export const ClientUpdateSchema = z.object(baseFields)
