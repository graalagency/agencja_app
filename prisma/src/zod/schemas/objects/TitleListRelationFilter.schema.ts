import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TitleWhereInputObjectSchema).optional(),
  some: z.lazy(() => TitleWhereInputObjectSchema).optional(),
  none: z.lazy(() => TitleWhereInputObjectSchema).optional()
}).strict();
export const TitleListRelationFilterObjectSchema: z.ZodType<Prisma.TitleListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TitleListRelationFilter>;
export const TitleListRelationFilterObjectZodSchema = makeSchema();
