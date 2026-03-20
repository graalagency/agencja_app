import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateNestedOneWithoutPublisherContactInputObjectSchema as ContactCreateNestedOneWithoutPublisherContactInputObjectSchema } from './ContactCreateNestedOneWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Contact: z.lazy(() => ContactCreateNestedOneWithoutPublisherContactInputObjectSchema)
}).strict();
export const PublisherContactCreateWithoutPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateWithoutPublisherInput>;
export const PublisherContactCreateWithoutPublisherInputObjectZodSchema = makeSchema();
