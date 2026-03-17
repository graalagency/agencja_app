import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryUpdateManyMutationInputObjectSchema as CurrencyDictionaryUpdateManyMutationInputObjectSchema } from './objects/CurrencyDictionaryUpdateManyMutationInput.schema';
import { CurrencyDictionaryWhereInputObjectSchema as CurrencyDictionaryWhereInputObjectSchema } from './objects/CurrencyDictionaryWhereInput.schema';

export const CurrencyDictionaryUpdateManyAndReturnSchema: z.ZodType<Prisma.CurrencyDictionaryUpdateManyAndReturnArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(), data: CurrencyDictionaryUpdateManyMutationInputObjectSchema, where: CurrencyDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryUpdateManyAndReturnArgs>;

export const CurrencyDictionaryUpdateManyAndReturnZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(), data: CurrencyDictionaryUpdateManyMutationInputObjectSchema, where: CurrencyDictionaryWhereInputObjectSchema.optional() }).strict();