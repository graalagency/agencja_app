import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventCreateManyAgreementInputObjectSchema as AgreementEventCreateManyAgreementInputObjectSchema } from './AgreementEventCreateManyAgreementInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementEventCreateManyAgreementInputObjectSchema), z.lazy(() => AgreementEventCreateManyAgreementInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementEventCreateManyAgreementInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementEventCreateManyAgreementInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventCreateManyAgreementInputEnvelope>;
export const AgreementEventCreateManyAgreementInputEnvelopeObjectZodSchema = makeSchema();
