import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorFindManySchema as AuthorFindManySchema } from '../findManyAuthor.schema';
import { ContactFindManySchema as ContactFindManySchema } from '../findManyContact.schema';
import { DocumentFindManySchema as DocumentFindManySchema } from '../findManyDocument.schema';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Author: z.union([z.boolean(), z.lazy(() => AuthorFindManySchema)]).optional(),
  Contact: z.union([z.boolean(), z.lazy(() => ContactFindManySchema)]).optional(),
  Document: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
  Invoice: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientIncludeObjectSchema: z.ZodType<Prisma.ClientInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientInclude>;
export const ClientIncludeObjectZodSchema = makeSchema();
