import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactCreateManyPublisherInputObjectSchema as PublisherContactCreateManyPublisherInputObjectSchema } from './PublisherContactCreateManyPublisherInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PublisherContactCreateManyPublisherInputObjectSchema), z.lazy(() => PublisherContactCreateManyPublisherInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PublisherContactCreateManyPublisherInputEnvelopeObjectSchema: z.ZodType<Prisma.PublisherContactCreateManyPublisherInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateManyPublisherInputEnvelope>;
export const PublisherContactCreateManyPublisherInputEnvelopeObjectZodSchema = makeSchema();
