import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.number().int(),
  authorId: z.number().int(),
  isMain: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();
export const TitleAuthorCreateManyInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyInput>;
export const TitleAuthorCreateManyInputObjectZodSchema = makeSchema();
