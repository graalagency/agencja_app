import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContactOrderByWithRelationInputObjectSchema as ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './PublisherOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  Contact: z.lazy(() => ContactOrderByWithRelationInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PublisherContactOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PublisherContactOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactOrderByWithRelationInput>;
export const PublisherContactOrderByWithRelationInputObjectZodSchema = makeSchema();
