import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateManyParentInputObjectSchema as PublisherCreateManyParentInputObjectSchema } from './PublisherCreateManyParentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PublisherCreateManyParentInputObjectSchema), z.lazy(() => PublisherCreateManyParentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PublisherCreateManyParentInputEnvelopeObjectSchema: z.ZodType<Prisma.PublisherCreateManyParentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateManyParentInputEnvelope>;
export const PublisherCreateManyParentInputEnvelopeObjectZodSchema = makeSchema();
