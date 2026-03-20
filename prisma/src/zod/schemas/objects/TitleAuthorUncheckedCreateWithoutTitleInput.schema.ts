import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  authorId: z.number().int(),
  isMain: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();
export const TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorUncheckedCreateWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUncheckedCreateWithoutTitleInput>;
export const TitleAuthorUncheckedCreateWithoutTitleInputObjectZodSchema = makeSchema();
