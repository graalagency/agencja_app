import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './TitleAuthorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TitleAuthorWhereInputObjectSchema).optional(),
  some: z.lazy(() => TitleAuthorWhereInputObjectSchema).optional(),
  none: z.lazy(() => TitleAuthorWhereInputObjectSchema).optional()
}).strict();
export const TitleAuthorListRelationFilterObjectSchema: z.ZodType<Prisma.TitleAuthorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorListRelationFilter>;
export const TitleAuthorListRelationFilterObjectZodSchema = makeSchema();
