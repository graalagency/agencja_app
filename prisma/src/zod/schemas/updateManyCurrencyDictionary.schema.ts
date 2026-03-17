import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionaryUpdateManyMutationInputObjectSchema as CurrencyDictionaryUpdateManyMutationInputObjectSchema } from './objects/CurrencyDictionaryUpdateManyMutationInput.schema';
import { CurrencyDictionaryWhereInputObjectSchema as CurrencyDictionaryWhereInputObjectSchema } from './objects/CurrencyDictionaryWhereInput.schema';

export const CurrencyDictionaryUpdateManySchema: z.ZodType<Prisma.CurrencyDictionaryUpdateManyArgs> = z.object({ data: CurrencyDictionaryUpdateManyMutationInputObjectSchema, where: CurrencyDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryUpdateManyArgs>;

export const CurrencyDictionaryUpdateManyZodSchema = z.object({ data: CurrencyDictionaryUpdateManyMutationInputObjectSchema, where: CurrencyDictionaryWhereInputObjectSchema.optional() }).strict();