import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateManyTitleInputObjectSchema as AgreementCreateManyTitleInputObjectSchema } from './AgreementCreateManyTitleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementCreateManyTitleInputObjectSchema), z.lazy(() => AgreementCreateManyTitleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementCreateManyTitleInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementCreateManyTitleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateManyTitleInputEnvelope>;
export const AgreementCreateManyTitleInputEnvelopeObjectZodSchema = makeSchema();
