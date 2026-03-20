import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './objects/TitleInclude.schema';
import { TitleUpdateInputObjectSchema as TitleUpdateInputObjectSchema } from './objects/TitleUpdateInput.schema';
import { TitleUncheckedUpdateInputObjectSchema as TitleUncheckedUpdateInputObjectSchema } from './objects/TitleUncheckedUpdateInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';

export const TitleUpdateOneSchema: z.ZodType<Prisma.TitleUpdateArgs> = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), data: z.union([TitleUpdateInputObjectSchema, TitleUncheckedUpdateInputObjectSchema]), where: TitleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TitleUpdateArgs>;

export const TitleUpdateOneZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), data: z.union([TitleUpdateInputObjectSchema, TitleUncheckedUpdateInputObjectSchema]), where: TitleWhereUniqueInputObjectSchema }).strict();