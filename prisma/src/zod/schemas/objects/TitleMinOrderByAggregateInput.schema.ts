import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  isbn: SortOrderSchema.optional(),
  languageCode: SortOrderSchema.optional(),
  classCode: SortOrderSchema.optional(),
  edition: SortOrderSchema.optional(),
  pages: SortOrderSchema.optional(),
  copyrightYear: SortOrderSchema.optional(),
  copyrightOwner: SortOrderSchema.optional(),
  keywords: SortOrderSchema.optional(),
  volume: SortOrderSchema.optional(),
  totalVolumes: SortOrderSchema.optional(),
  isHit: SortOrderSchema.optional(),
  isCollection: SortOrderSchema.optional(),
  isCD: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  dateOfReceipt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TitleMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TitleMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleMinOrderByAggregateInput>;
export const TitleMinOrderByAggregateInputObjectZodSchema = makeSchema();
