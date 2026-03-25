import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceCreateManyAgreementInputObjectSchema as AgreementAdvanceCreateManyAgreementInputObjectSchema } from './AgreementAdvanceCreateManyAgreementInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementAdvanceCreateManyAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceCreateManyAgreementInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementAdvanceCreateManyAgreementInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceCreateManyAgreementInputEnvelope>;
export const AgreementAdvanceCreateManyAgreementInputEnvelopeObjectZodSchema = makeSchema();
