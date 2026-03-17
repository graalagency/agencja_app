import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const dictlanguagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DictLanguageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DictLanguageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DictLanguageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DictLanguageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DictLanguageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DictLanguageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DictLanguageScalarWhereWithAggregatesInput> = dictlanguagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DictLanguageScalarWhereWithAggregatesInput>;
export const DictLanguageScalarWhereWithAggregatesInputObjectZodSchema = dictlanguagescalarwherewithaggregatesinputSchema;
