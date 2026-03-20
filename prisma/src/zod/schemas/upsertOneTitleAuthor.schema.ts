import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './objects/TitleAuthorInclude.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './objects/TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorCreateInputObjectSchema as TitleAuthorCreateInputObjectSchema } from './objects/TitleAuthorCreateInput.schema';
import { TitleAuthorUncheckedCreateInputObjectSchema as TitleAuthorUncheckedCreateInputObjectSchema } from './objects/TitleAuthorUncheckedCreateInput.schema';
import { TitleAuthorUpdateInputObjectSchema as TitleAuthorUpdateInputObjectSchema } from './objects/TitleAuthorUpdateInput.schema';
import { TitleAuthorUncheckedUpdateInputObjectSchema as TitleAuthorUncheckedUpdateInputObjectSchema } from './objects/TitleAuthorUncheckedUpdateInput.schema';

export const TitleAuthorUpsertOneSchema: z.ZodType<Prisma.TitleAuthorUpsertArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), where: TitleAuthorWhereUniqueInputObjectSchema, create: z.union([ TitleAuthorCreateInputObjectSchema, TitleAuthorUncheckedCreateInputObjectSchema ]), update: z.union([ TitleAuthorUpdateInputObjectSchema, TitleAuthorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TitleAuthorUpsertArgs>;

export const TitleAuthorUpsertOneZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), where: TitleAuthorWhereUniqueInputObjectSchema, create: z.union([ TitleAuthorCreateInputObjectSchema, TitleAuthorUncheckedCreateInputObjectSchema ]), update: z.union([ TitleAuthorUpdateInputObjectSchema, TitleAuthorUncheckedUpdateInputObjectSchema ]) }).strict();