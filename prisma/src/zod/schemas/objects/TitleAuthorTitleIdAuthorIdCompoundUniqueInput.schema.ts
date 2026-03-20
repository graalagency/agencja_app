import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  titleId: z.number().int(),
  authorId: z.number().int()
}).strict();
export const TitleAuthorTitleIdAuthorIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TitleAuthorTitleIdAuthorIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorTitleIdAuthorIdCompoundUniqueInput>;
export const TitleAuthorTitleIdAuthorIdCompoundUniqueInputObjectZodSchema = makeSchema();
