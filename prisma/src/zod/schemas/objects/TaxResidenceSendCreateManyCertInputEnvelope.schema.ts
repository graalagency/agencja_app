import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateManyCertInputObjectSchema as TaxResidenceSendCreateManyCertInputObjectSchema } from './TaxResidenceSendCreateManyCertInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaxResidenceSendCreateManyCertInputObjectSchema), z.lazy(() => TaxResidenceSendCreateManyCertInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateManyCertInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateManyCertInputEnvelope>;
export const TaxResidenceSendCreateManyCertInputEnvelopeObjectZodSchema = makeSchema();
