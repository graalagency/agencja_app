import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryWhereUniqueInputObjectSchema as CurrencyDictionaryWhereUniqueInputObjectSchema } from './objects/CurrencyDictionaryWhereUniqueInput.schema';
import { CurrencyDictionaryCreateInputObjectSchema as CurrencyDictionaryCreateInputObjectSchema } from './objects/CurrencyDictionaryCreateInput.schema';
import { CurrencyDictionaryUncheckedCreateInputObjectSchema as CurrencyDictionaryUncheckedCreateInputObjectSchema } from './objects/CurrencyDictionaryUncheckedCreateInput.schema';
import { CurrencyDictionaryUpdateInputObjectSchema as CurrencyDictionaryUpdateInputObjectSchema } from './objects/CurrencyDictionaryUpdateInput.schema';
import { CurrencyDictionaryUncheckedUpdateInputObjectSchema as CurrencyDictionaryUncheckedUpdateInputObjectSchema } from './objects/CurrencyDictionaryUncheckedUpdateInput.schema';

export const CurrencyDictionaryUpsertOneSchema: z.ZodType<Prisma.CurrencyDictionaryUpsertArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema, create: z.union([ CurrencyDictionaryCreateInputObjectSchema, CurrencyDictionaryUncheckedCreateInputObjectSchema ]), update: z.union([ CurrencyDictionaryUpdateInputObjectSchema, CurrencyDictionaryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryUpsertArgs>;

export const CurrencyDictionaryUpsertOneZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(),  where: CurrencyDictionaryWhereUniqueInputObjectSchema, create: z.union([ CurrencyDictionaryCreateInputObjectSchema, CurrencyDictionaryUncheckedCreateInputObjectSchema ]), update: z.union([ CurrencyDictionaryUpdateInputObjectSchema, CurrencyDictionaryUncheckedUpdateInputObjectSchema ]) }).strict();