import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './objects/TitleAuthorInclude.schema';
import { TitleAuthorUpdateInputObjectSchema as TitleAuthorUpdateInputObjectSchema } from './objects/TitleAuthorUpdateInput.schema';
import { TitleAuthorUncheckedUpdateInputObjectSchema as TitleAuthorUncheckedUpdateInputObjectSchema } from './objects/TitleAuthorUncheckedUpdateInput.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './objects/TitleAuthorWhereUniqueInput.schema';

export const TitleAuthorUpdateOneSchema: z.ZodType<Prisma.TitleAuthorUpdateArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), data: z.union([TitleAuthorUpdateInputObjectSchema, TitleAuthorUncheckedUpdateInputObjectSchema]), where: TitleAuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TitleAuthorUpdateArgs>;

export const TitleAuthorUpdateOneZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), data: z.union([TitleAuthorUpdateInputObjectSchema, TitleAuthorUncheckedUpdateInputObjectSchema]), where: TitleAuthorWhereUniqueInputObjectSchema }).strict();