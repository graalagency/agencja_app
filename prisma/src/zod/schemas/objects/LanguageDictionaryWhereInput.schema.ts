import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const languagedictionarywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LanguageDictionaryWhereInputObjectSchema), z.lazy(() => LanguageDictionaryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LanguageDictionaryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LanguageDictionaryWhereInputObjectSchema), z.lazy(() => LanguageDictionaryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const LanguageDictionaryWhereInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryWhereInput> = languagedictionarywhereinputSchema as unknown as z.ZodType<Prisma.LanguageDictionaryWhereInput>;
export const LanguageDictionaryWhereInputObjectZodSchema = languagedictionarywhereinputSchema;
