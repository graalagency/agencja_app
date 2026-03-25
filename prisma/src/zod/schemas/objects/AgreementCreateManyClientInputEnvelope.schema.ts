import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateManyClientInputObjectSchema as AgreementCreateManyClientInputObjectSchema } from './AgreementCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementCreateManyClientInputObjectSchema), z.lazy(() => AgreementCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateManyClientInputEnvelope>;
export const AgreementCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
