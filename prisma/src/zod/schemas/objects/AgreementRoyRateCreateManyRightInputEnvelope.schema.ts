import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateManyRightInputObjectSchema as AgreementRoyRateCreateManyRightInputObjectSchema } from './AgreementRoyRateCreateManyRightInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementRoyRateCreateManyRightInputObjectSchema), z.lazy(() => AgreementRoyRateCreateManyRightInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateManyRightInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateManyRightInputEnvelope>;
export const AgreementRoyRateCreateManyRightInputEnvelopeObjectZodSchema = makeSchema();
