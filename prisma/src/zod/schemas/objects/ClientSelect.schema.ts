import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { ClientFindManySchema as ClientFindManySchema } from '../findManyClient.schema';
import { AuthorFindManySchema as AuthorFindManySchema } from '../findManyAuthor.schema';
import { ClientContactFindManySchema as ClientContactFindManySchema } from '../findManyClientContact.schema';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { TaxResidenceCertFindManySchema as TaxResidenceCertFindManySchema } from '../findManyTaxResidenceCert.schema';
import { TaxResidenceSendFindManySchema as TaxResidenceSendFindManySchema } from '../findManyTaxResidenceSend.schema';
import { TitleFindManySchema as TitleFindManySchema } from '../findManyTitle.schema';
import { AgreementFindManySchema as AgreementFindManySchema } from '../findManyAgreement.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  name: z.boolean().optional(),
  abbreviation: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  fax: z.boolean().optional(),
  www: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  address: z.boolean().optional(),
  address2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  language: z.boolean().optional(),
  legalForm: z.boolean().optional(),
  nip: z.boolean().optional(),
  vatId: z.boolean().optional(),
  regon: z.boolean().optional(),
  jurisdiction: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  bankAccount: z.boolean().optional(),
  bankName: z.boolean().optional(),
  bankAddress: z.boolean().optional(),
  bankRoutingNo: z.boolean().optional(),
  bankAccountName: z.boolean().optional(),
  commission: z.boolean().optional(),
  commissionForeign: z.boolean().optional(),
  commissionMaterials: z.boolean().optional(),
  repModeId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  Parent: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Children: z.union([z.boolean(), z.lazy(() => ClientFindManySchema)]).optional(),
  Author: z.union([z.boolean(), z.lazy(() => AuthorFindManySchema)]).optional(),
  ClientContact: z.union([z.boolean(), z.lazy(() => ClientContactFindManySchema)]).optional(),
  Invoice: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  TaxResidenceCert: z.union([z.boolean(), z.lazy(() => TaxResidenceCertFindManySchema)]).optional(),
  TaxResidenceSend: z.union([z.boolean(), z.lazy(() => TaxResidenceSendFindManySchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleFindManySchema)]).optional(),
  Agreements: z.union([z.boolean(), z.lazy(() => AgreementFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientSelectObjectSchema: z.ZodType<Prisma.ClientSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientSelect>;
export const ClientSelectObjectZodSchema = makeSchema();
