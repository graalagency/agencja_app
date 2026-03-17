import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const countrydictionarywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CountryDictionaryWhereInputObjectSchema), z.lazy(() => CountryDictionaryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CountryDictionaryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CountryDictionaryWhereInputObjectSchema), z.lazy(() => CountryDictionaryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tax: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  eu: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CountryDictionaryWhereInputObjectSchema: z.ZodType<Prisma.CountryDictionaryWhereInput> = countrydictionarywhereinputSchema as unknown as z.ZodType<Prisma.CountryDictionaryWhereInput>;
export const CountryDictionaryWhereInputObjectZodSchema = countrydictionarywhereinputSchema;
