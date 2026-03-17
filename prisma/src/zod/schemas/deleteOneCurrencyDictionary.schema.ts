import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryWhereUniqueInputObjectSchema as CurrencyDictionaryWhereUniqueInputObjectSchema } from './objects/CurrencyDictionaryWhereUniqueInput.schema';

export const CurrencyDictionaryDeleteOneSchema: z.ZodType<Prisma.CurrencyDictionaryDeleteArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryDeleteArgs>;

export const CurrencyDictionaryDeleteOneZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict();