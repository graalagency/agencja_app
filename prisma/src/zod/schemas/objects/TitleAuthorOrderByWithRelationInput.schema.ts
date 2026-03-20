import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TitleOrderByWithRelationInputObjectSchema as TitleOrderByWithRelationInputObjectSchema } from './TitleOrderByWithRelationInput.schema';
import { AuthorOrderByWithRelationInputObjectSchema as AuthorOrderByWithRelationInputObjectSchema } from './AuthorOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  titleId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  isMain: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  Title: z.lazy(() => TitleOrderByWithRelationInputObjectSchema).optional(),
  Author: z.lazy(() => AuthorOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TitleAuthorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TitleAuthorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorOrderByWithRelationInput>;
export const TitleAuthorOrderByWithRelationInputObjectZodSchema = makeSchema();
