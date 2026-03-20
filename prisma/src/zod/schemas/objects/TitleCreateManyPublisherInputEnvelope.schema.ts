import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateManyPublisherInputObjectSchema as TitleCreateManyPublisherInputObjectSchema } from './TitleCreateManyPublisherInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TitleCreateManyPublisherInputObjectSchema), z.lazy(() => TitleCreateManyPublisherInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TitleCreateManyPublisherInputEnvelopeObjectSchema: z.ZodType<Prisma.TitleCreateManyPublisherInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateManyPublisherInputEnvelope>;
export const TitleCreateManyPublisherInputEnvelopeObjectZodSchema = makeSchema();
