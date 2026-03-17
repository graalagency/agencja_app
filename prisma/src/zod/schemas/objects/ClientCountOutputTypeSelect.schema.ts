import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCountOutputTypeCountAuthorArgsObjectSchema as ClientCountOutputTypeCountAuthorArgsObjectSchema } from './ClientCountOutputTypeCountAuthorArgs.schema';
import { ClientCountOutputTypeCountContactArgsObjectSchema as ClientCountOutputTypeCountContactArgsObjectSchema } from './ClientCountOutputTypeCountContactArgs.schema';
import { ClientCountOutputTypeCountDocumentArgsObjectSchema as ClientCountOutputTypeCountDocumentArgsObjectSchema } from './ClientCountOutputTypeCountDocumentArgs.schema';
import { ClientCountOutputTypeCountInvoiceArgsObjectSchema as ClientCountOutputTypeCountInvoiceArgsObjectSchema } from './ClientCountOutputTypeCountInvoiceArgs.schema'

const makeSchema = () => z.object({
  Author: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountAuthorArgsObjectSchema)]).optional(),
  Contact: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountContactArgsObjectSchema)]).optional(),
  Document: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountDocumentArgsObjectSchema)]).optional(),
  Invoice: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountInvoiceArgsObjectSchema)]).optional()
}).strict();
export const ClientCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOutputTypeSelect>;
export const ClientCountOutputTypeSelectObjectZodSchema = makeSchema();
