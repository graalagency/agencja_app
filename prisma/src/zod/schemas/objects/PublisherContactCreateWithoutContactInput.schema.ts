import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema as PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema } from './PublisherCreateNestedOneWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema)
}).strict();
export const PublisherContactCreateWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateWithoutContactInput>;
export const PublisherContactCreateWithoutContactInputObjectZodSchema = makeSchema();
