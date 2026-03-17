import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageUpdateInputObjectSchema as DictLanguageUpdateInputObjectSchema } from './objects/DictLanguageUpdateInput.schema';
import { DictLanguageUncheckedUpdateInputObjectSchema as DictLanguageUncheckedUpdateInputObjectSchema } from './objects/DictLanguageUncheckedUpdateInput.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';

export const DictLanguageUpdateOneSchema: z.ZodType<Prisma.DictLanguageUpdateArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(),  data: z.union([DictLanguageUpdateInputObjectSchema, DictLanguageUncheckedUpdateInputObjectSchema]), where: DictLanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictLanguageUpdateArgs>;

export const DictLanguageUpdateOneZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(),  data: z.union([DictLanguageUpdateInputObjectSchema, DictLanguageUncheckedUpdateInputObjectSchema]), where: DictLanguageWhereUniqueInputObjectSchema }).strict();