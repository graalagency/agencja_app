import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TitleWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TitleWhereInputObjectSchema).optional().nullable()
}).strict();
export const TitleNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TitleNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TitleNullableScalarRelationFilter>;
export const TitleNullableScalarRelationFilterObjectZodSchema = makeSchema();
