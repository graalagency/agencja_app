import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './objects/TitleAuthorInclude.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './objects/TitleAuthorWhereUniqueInput.schema';

export const TitleAuthorFindUniqueSchema: z.ZodType<Prisma.TitleAuthorFindUniqueArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), where: TitleAuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TitleAuthorFindUniqueArgs>;

export const TitleAuthorFindUniqueZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), where: TitleAuthorWhereUniqueInputObjectSchema }).strict();