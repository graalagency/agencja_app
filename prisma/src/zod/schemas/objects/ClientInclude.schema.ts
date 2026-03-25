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
export const ClientIncludeObjectSchema: z.ZodType<Prisma.ClientInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientInclude>;
export const ClientIncludeObjectZodSchema = makeSchema();
