import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryWhereUniqueInputObjectSchema as CurrencyDictionaryWhereUniqueInputObjectSchema } from './objects/CurrencyDictionaryWhereUniqueInput.schema';

export const CurrencyDictionaryFindUniqueSchema: z.ZodType<Prisma.CurrencyDictionaryFindUniqueArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryFindUniqueArgs>;

export const CurrencyDictionaryFindUniqueZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict();