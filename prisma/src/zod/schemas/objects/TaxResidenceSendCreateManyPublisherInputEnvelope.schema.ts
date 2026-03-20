import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateManyPublisherInputObjectSchema as TaxResidenceSendCreateManyPublisherInputObjectSchema } from './TaxResidenceSendCreateManyPublisherInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaxResidenceSendCreateManyPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendCreateManyPublisherInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateManyPublisherInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateManyPublisherInputEnvelope>;
export const TaxResidenceSendCreateManyPublisherInputEnvelopeObjectZodSchema = makeSchema();
