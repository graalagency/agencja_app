import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const dictcurrencyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DictCurrencyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DictCurrencyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DictCurrencyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DictCurrencyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DictCurrencyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DictCurrencyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DictCurrencyScalarWhereWithAggregatesInput> = dictcurrencyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DictCurrencyScalarWhereWithAggregatesInput>;
export const DictCurrencyScalarWhereWithAggregatesInputObjectZodSchema = dictcurrencyscalarwherewithaggregatesinputSchema;
