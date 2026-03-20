import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.number().int(),
  authorId: z.number().int(),
  isMain: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();
export const TitleAuthorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TitleAuthorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUncheckedCreateInput>;
export const TitleAuthorUncheckedCreateInputObjectZodSchema = makeSchema();
