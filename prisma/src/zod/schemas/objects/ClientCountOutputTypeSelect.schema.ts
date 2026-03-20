import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCountOutputTypeCountChildrenArgsObjectSchema as ClientCountOutputTypeCountChildrenArgsObjectSchema } from './ClientCountOutputTypeCountChildrenArgs.schema';
import { ClientCountOutputTypeCountAuthorArgsObjectSchema as ClientCountOutputTypeCountAuthorArgsObjectSchema } from './ClientCountOutputTypeCountAuthorArgs.schema';
import { ClientCountOutputTypeCountClientContactArgsObjectSchema as ClientCountOutputTypeCountClientContactArgsObjectSchema } from './ClientCountOutputTypeCountClientContactArgs.schema';
import { ClientCountOutputTypeCountDocumentArgsObjectSchema as ClientCountOutputTypeCountDocumentArgsObjectSchema } from './ClientCountOutputTypeCountDocumentArgs.schema';
import { ClientCountOutputTypeCountInvoiceArgsObjectSchema as ClientCountOutputTypeCountInvoiceArgsObjectSchema } from './ClientCountOutputTypeCountInvoiceArgs.schema';
import { ClientCountOutputTypeCountTaxResidenceCertArgsObjectSchema as ClientCountOutputTypeCountTaxResidenceCertArgsObjectSchema } from './ClientCountOutputTypeCountTaxResidenceCertArgs.schema';
import { ClientCountOutputTypeCountTaxResidenceSendArgsObjectSchema as ClientCountOutputTypeCountTaxResidenceSendArgsObjectSchema } from './ClientCountOutputTypeCountTaxResidenceSendArgs.schema';
import { ClientCountOutputTypeCountTitleArgsObjectSchema as ClientCountOutputTypeCountTitleArgsObjectSchema } from './ClientCountOutputTypeCountTitleArgs.schema'

const makeSchema = () => z.object({
  Children: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountChildrenArgsObjectSchema)]).optional(),
  Author: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountAuthorArgsObjectSchema)]).optional(),
  ClientContact: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountClientContactArgsObjectSchema)]).optional(),
  Document: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountDocumentArgsObjectSchema)]).optional(),
  Invoice: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountInvoiceArgsObjectSchema)]).optional(),
  TaxResidenceCert: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountTaxResidenceCertArgsObjectSchema)]).optional(),
  TaxResidenceSend: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountTaxResidenceSendArgsObjectSchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountTitleArgsObjectSchema)]).optional()
}).strict();
export const ClientCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOutputTypeSelect>;
export const ClientCountOutputTypeSelectObjectZodSchema = makeSchema();
