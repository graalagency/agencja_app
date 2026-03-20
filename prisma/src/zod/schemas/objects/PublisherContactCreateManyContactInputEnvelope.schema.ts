import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactCreateManyContactInputObjectSchema as PublisherContactCreateManyContactInputObjectSchema } from './PublisherContactCreateManyContactInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PublisherContactCreateManyContactInputObjectSchema), z.lazy(() => PublisherContactCreateManyContactInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PublisherContactCreateManyContactInputEnvelopeObjectSchema: z.ZodType<Prisma.PublisherContactCreateManyContactInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateManyContactInputEnvelope>;
export const PublisherContactCreateManyContactInputEnvelopeObjectZodSchema = makeSchema();
