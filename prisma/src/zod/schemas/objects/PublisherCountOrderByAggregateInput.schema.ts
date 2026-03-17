import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  bankAccount: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  legalForm: SortOrderSchema.optional(),
  nip: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  regon: SortOrderSchema.optional()
}).strict();
export const PublisherCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublisherCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCountOrderByAggregateInput>;
export const PublisherCountOrderByAggregateInputObjectZodSchema = makeSchema();
