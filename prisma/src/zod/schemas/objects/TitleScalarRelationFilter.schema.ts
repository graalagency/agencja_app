import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TitleWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TitleWhereInputObjectSchema).optional()
}).strict();
export const TitleScalarRelationFilterObjectSchema: z.ZodType<Prisma.TitleScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TitleScalarRelationFilter>;
export const TitleScalarRelationFilterObjectZodSchema = makeSchema();
