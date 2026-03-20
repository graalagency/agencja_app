import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema as TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateNestedOneWithoutSendLogInput.schema';
import { PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema as PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateNestedOneWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  dateSend: z.coerce.date().optional().nullable(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Cert: z.lazy(() => TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateWithoutClientInput>;
export const TaxResidenceSendCreateWithoutClientInputObjectZodSchema = makeSchema();
