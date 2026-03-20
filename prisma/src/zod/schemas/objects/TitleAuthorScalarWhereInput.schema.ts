import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const titleauthorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TitleAuthorScalarWhereInputObjectSchema), z.lazy(() => TitleAuthorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TitleAuthorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TitleAuthorScalarWhereInputObjectSchema), z.lazy(() => TitleAuthorScalarWhereInputObjectSchema).array()]).optional(),
  titleId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  authorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isMain: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TitleAuthorScalarWhereInputObjectSchema: z.ZodType<Prisma.TitleAuthorScalarWhereInput> = titleauthorscalarwhereinputSchema as unknown as z.ZodType<Prisma.TitleAuthorScalarWhereInput>;
export const TitleAuthorScalarWhereInputObjectZodSchema = titleauthorscalarwhereinputSchema;
