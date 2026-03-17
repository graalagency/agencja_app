import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorFindManySchema as AuthorFindManySchema } from '../findManyAuthor.schema';
import { ContactFindManySchema as ContactFindManySchema } from '../findManyContact.schema';
import { DocumentFindManySchema as DocumentFindManySchema } from '../findManyDocument.schema';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  address: z.boolean().optional(),
  bankAccount: z.boolean().optional(),
  city: z.boolean().optional(),
  country: z.boolean().optional(),
  legalForm: z.boolean().optional(),
  nip: z.boolean().optional(),
  notes: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  regon: z.boolean().optional(),
  Author: z.union([z.boolean(), z.lazy(() => AuthorFindManySchema)]).optional(),
  Contact: z.union([z.boolean(), z.lazy(() => ContactFindManySchema)]).optional(),
  Document: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
  Invoice: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientSelectObjectSchema: z.ZodType<Prisma.ClientSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientSelect>;
export const ClientSelectObjectZodSchema = makeSchema();
