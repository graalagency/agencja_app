import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCreateManyAgreementInputObjectSchema as AgreementRightCreateManyAgreementInputObjectSchema } from './AgreementRightCreateManyAgreementInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementRightCreateManyAgreementInputObjectSchema), z.lazy(() => AgreementRightCreateManyAgreementInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementRightCreateManyAgreementInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementRightCreateManyAgreementInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateManyAgreementInputEnvelope>;
export const AgreementRightCreateManyAgreementInputEnvelopeObjectZodSchema = makeSchema();
