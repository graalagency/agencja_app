import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const titleauthorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TitleAuthorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TitleAuthorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TitleAuthorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TitleAuthorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TitleAuthorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  titleId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  authorId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isMain: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TitleAuthorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TitleAuthorScalarWhereWithAggregatesInput> = titleauthorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TitleAuthorScalarWhereWithAggregatesInput>;
export const TitleAuthorScalarWhereWithAggregatesInputObjectZodSchema = titleauthorscalarwherewithaggregatesinputSchema;
