import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema as TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateNestedOneWithoutSendLogInput.schema';
import { ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema as ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateNestedOneWithoutTaxResidenceSendInput.schema';
import { PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema as PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateNestedOneWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  dateSend: z.coerce.date().optional().nullable(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Cert: z.lazy(() => TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema),
  Client: z.lazy(() => ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendCreateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateInput>;
export const TaxResidenceSendCreateInputObjectZodSchema = makeSchema();
