import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryCreateInputObjectSchema as CurrencyDictionaryCreateInputObjectSchema } from './objects/CurrencyDictionaryCreateInput.schema';
import { CurrencyDictionaryUncheckedCreateInputObjectSchema as CurrencyDictionaryUncheckedCreateInputObjectSchema } from './objects/CurrencyDictionaryUncheckedCreateInput.schema';

export const CurrencyDictionaryCreateOneSchema: z.ZodType<Prisma.CurrencyDictionaryCreateArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  data: z.union([CurrencyDictionaryCreateInputObjectSchema, CurrencyDictionaryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryCreateArgs>;

export const CurrencyDictionaryCreateOneZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  data: z.union([CurrencyDictionaryCreateInputObjectSchema, CurrencyDictionaryUncheckedCreateInputObjectSchema]) }).strict();