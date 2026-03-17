import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionaryWhereInputObjectSchema as CurrencyDictionaryWhereInputObjectSchema } from './objects/CurrencyDictionaryWhereInput.schema';

export const CurrencyDictionaryDeleteManySchema: z.ZodType<Prisma.CurrencyDictionaryDeleteManyArgs> = z.object({ where: CurrencyDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryDeleteManyArgs>;

export const CurrencyDictionaryDeleteManyZodSchema = z.object({ where: CurrencyDictionaryWhereInputObjectSchema.optional() }).strict();