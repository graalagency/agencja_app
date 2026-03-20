import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateManyClientInputObjectSchema as TaxResidenceSendCreateManyClientInputObjectSchema } from './TaxResidenceSendCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaxResidenceSendCreateManyClientInputObjectSchema), z.lazy(() => TaxResidenceSendCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateManyClientInputEnvelope>;
export const TaxResidenceSendCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
