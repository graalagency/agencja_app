import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateManyClientInputObjectSchema as TaxResidenceCertCreateManyClientInputObjectSchema } from './TaxResidenceCertCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaxResidenceCertCreateManyClientInputObjectSchema), z.lazy(() => TaxResidenceCertCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaxResidenceCertCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateManyClientInputEnvelope>;
export const TaxResidenceCertCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
