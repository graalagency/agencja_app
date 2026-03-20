import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.number().int(),
  isMain: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();
export const TitleAuthorCreateManyAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateManyAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyAuthorInput>;
export const TitleAuthorCreateManyAuthorInputObjectZodSchema = makeSchema();
