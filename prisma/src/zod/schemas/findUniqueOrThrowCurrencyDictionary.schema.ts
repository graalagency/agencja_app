import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryWhereUniqueInputObjectSchema as CurrencyDictionaryWhereUniqueInputObjectSchema } from './objects/CurrencyDictionaryWhereUniqueInput.schema';

export const CurrencyDictionaryFindUniqueOrThrowSchema: z.ZodType<Prisma.CurrencyDictionaryFindUniqueOrThrowArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryFindUniqueOrThrowArgs>;

export const CurrencyDictionaryFindUniqueOrThrowZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema }).strict();