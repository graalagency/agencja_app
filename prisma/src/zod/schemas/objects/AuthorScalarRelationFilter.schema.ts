import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AuthorWhereInputObjectSchema).optional()
}).strict();
export const AuthorScalarRelationFilterObjectSchema: z.ZodType<Prisma.AuthorScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AuthorScalarRelationFilter>;
export const AuthorScalarRelationFilterObjectZodSchema = makeSchema();
