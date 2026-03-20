import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorTitleIdAuthorIdCompoundUniqueInputObjectSchema as TitleAuthorTitleIdAuthorIdCompoundUniqueInputObjectSchema } from './TitleAuthorTitleIdAuthorIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  titleId_authorId: z.lazy(() => TitleAuthorTitleIdAuthorIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const TitleAuthorWhereUniqueInputObjectSchema: z.ZodType<Prisma.TitleAuthorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorWhereUniqueInput>;
export const TitleAuthorWhereUniqueInputObjectZodSchema = makeSchema();
