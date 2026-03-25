import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateManyAgreementInputObjectSchema as AgreementRoyRateCreateManyAgreementInputObjectSchema } from './AgreementRoyRateCreateManyAgreementInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementRoyRateCreateManyAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateCreateManyAgreementInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementRoyRateCreateManyAgreementInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateManyAgreementInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateManyAgreementInputEnvelope>;
export const AgreementRoyRateCreateManyAgreementInputEnvelopeObjectZodSchema = makeSchema();
