import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionarySelectObjectSchema as CurrencyDictionarySelectObjectSchema } from './objects/CurrencyDictionarySelect.schema';
import { CurrencyDictionaryCreateManyInputObjectSchema as CurrencyDictionaryCreateManyInputObjectSchema } from './objects/CurrencyDictionaryCreateManyInput.schema';

export const CurrencyDictionaryCreateManyAndReturnSchema: z.ZodType<Prisma.CurrencyDictionaryCreateManyAndReturnArgs> = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(), data: z.union([ CurrencyDictionaryCreateManyInputObjectSchema, z.array(CurrencyDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryCreateManyAndReturnArgs>;

export const CurrencyDictionaryCreateManyAndReturnZodSchema = z.object({ select: CurrencyDictionarySelectObjectSchema.optional(), data: z.union([ CurrencyDictionaryCreateManyInputObjectSchema, z.array(CurrencyDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();