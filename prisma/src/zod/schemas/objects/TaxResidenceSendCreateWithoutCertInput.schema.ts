import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema as ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema } from './ClientCreateNestedOneWithoutTaxResidenceSendInput.schema';
import { PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema as PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateNestedOneWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  dateSend: z.coerce.date().optional().nullable(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutTaxResidenceSendInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendCreateWithoutCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateWithoutCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateWithoutCertInput>;
export const TaxResidenceSendCreateWithoutCertInputObjectZodSchema = makeSchema();
