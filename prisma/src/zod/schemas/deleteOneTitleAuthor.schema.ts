import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './objects/TitleAuthorInclude.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './objects/TitleAuthorWhereUniqueInput.schema';

export const TitleAuthorDeleteOneSchema: z.ZodType<Prisma.TitleAuthorDeleteArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), where: TitleAuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TitleAuthorDeleteArgs>;

export const TitleAuthorDeleteOneZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), where: TitleAuthorWhereUniqueInputObjectSchema }).strict();