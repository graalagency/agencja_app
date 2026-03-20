import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateNestedOneWithoutPublisherContactInputObjectSchema as ContactCreateNestedOneWithoutPublisherContactInputObjectSchema } from './ContactCreateNestedOneWithoutPublisherContactInput.schema';
import { PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema as PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema } from './PublisherCreateNestedOneWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Contact: z.lazy(() => ContactCreateNestedOneWithoutPublisherContactInputObjectSchema),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema)
}).strict();
export const PublisherContactCreateInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateInput>;
export const PublisherContactCreateInputObjectZodSchema = makeSchema();
