import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema as TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateNestedOneWithoutSendLogInput.schema';
import { ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema as ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateNestedOneWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  dateSend: z.coerce.date().optional().nullable(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Cert: z.lazy(() => TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema),
  Client: z.lazy(() => ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendCreateWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateWithoutPublisherInput>;
export const TaxResidenceSendCreateWithoutPublisherInputObjectZodSchema = makeSchema();
