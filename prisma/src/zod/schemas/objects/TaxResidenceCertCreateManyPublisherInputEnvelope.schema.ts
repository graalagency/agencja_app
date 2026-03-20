import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateManyPublisherInputObjectSchema as TaxResidenceCertCreateManyPublisherInputObjectSchema } from './TaxResidenceCertCreateManyPublisherInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaxResidenceCertCreateManyPublisherInputObjectSchema), z.lazy(() => TaxResidenceCertCreateManyPublisherInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaxResidenceCertCreateManyPublisherInputEnvelopeObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateManyPublisherInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateManyPublisherInputEnvelope>;
export const TaxResidenceCertCreateManyPublisherInputEnvelopeObjectZodSchema = makeSchema();
