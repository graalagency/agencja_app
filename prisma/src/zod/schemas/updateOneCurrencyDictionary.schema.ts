import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryUpdateInputObjectSchema as CurrencyDictionaryUpdateInputObjectSchema } from './objects/CurrencyDictionaryUpdateInput.schema';
import { CurrencyDictionaryUncheckedUpdateInputObjectSchema as CurrencyDictionaryUncheckedUpdateInputObjectSchema } from './objects/CurrencyDictionaryUncheckedUpdateInput.schema';
import { CurrencyDictionaryWhereUniqueInputObjectSchema as CurrencyDictionaryWhereUniqueInputObjectSchema } from './objects/CurrencyDictionaryWhereUniqueInput.schema';

export const CurrencyDictionaryUpdateOneSchema: z.ZodType<Prisma.CurrencyDictionaryUpdateArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  data: z.union([CurrencyDictionaryUpdateInputObjectSchema, CurrencyDictionaryUncheckedUpdateInputObjectSchema]), where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryUpdateArgs>;

export const CurrencyDictionaryUpdateOneZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  data: z.union([CurrencyDictionaryUpdateInputObjectSchema, CurrencyDictionaryUncheckedUpdateInputObjectSchema]), where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict();