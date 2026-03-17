import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const currencydictionaryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CurrencyDictionaryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CurrencyDictionaryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CurrencyDictionaryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CurrencyDictionaryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CurrencyDictionaryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CurrencyDictionaryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryScalarWhereWithAggregatesInput> = currencydictionaryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CurrencyDictionaryScalarWhereWithAggregatesInput>;
export const CurrencyDictionaryScalarWhereWithAggregatesInputObjectZodSchema = currencydictionaryscalarwherewithaggregatesinputSchema;
