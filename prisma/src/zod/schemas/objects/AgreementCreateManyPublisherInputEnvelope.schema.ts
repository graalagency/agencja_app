import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateManyPublisherInputObjectSchema as AgreementCreateManyPublisherInputObjectSchema } from './AgreementCreateManyPublisherInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgreementCreateManyPublisherInputObjectSchema), z.lazy(() => AgreementCreateManyPublisherInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgreementCreateManyPublisherInputEnvelopeObjectSchema: z.ZodType<Prisma.AgreementCreateManyPublisherInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateManyPublisherInputEnvelope>;
export const AgreementCreateManyPublisherInputEnvelopeObjectZodSchema = makeSchema();
