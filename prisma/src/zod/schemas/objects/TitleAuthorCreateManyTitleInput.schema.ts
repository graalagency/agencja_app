import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  authorId: z.number().int(),
  isMain: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();
export const TitleAuthorCreateManyTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateManyTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyTitleInput>;
export const TitleAuthorCreateManyTitleInputObjectZodSchema = makeSchema();
