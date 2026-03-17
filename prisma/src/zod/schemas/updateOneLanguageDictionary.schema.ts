import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryUpdateInputObjectSchema as LanguageDictionaryUpdateInputObjectSchema } from './objects/LanguageDictionaryUpdateInput.schema';
import { LanguageDictionaryUncheckedUpdateInputObjectSchema as LanguageDictionaryUncheckedUpdateInputObjectSchema } from './objects/LanguageDictionaryUncheckedUpdateInput.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';

export const LanguageDictionaryUpdateOneSchema: z.ZodType<Prisma.LanguageDictionaryUpdateArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  data: z.union([LanguageDictionaryUpdateInputObjectSchema, LanguageDictionaryUncheckedUpdateInputObjectSchema]), where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryUpdateArgs>;

export const LanguageDictionaryUpdateOneZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  data: z.union([LanguageDictionaryUpdateInputObjectSchema, LanguageDictionaryUncheckedUpdateInputObjectSchema]), where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict();