import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CurrencyDictionaryCreateManyInputObjectSchema as CurrencyDictionaryCreateManyInputObjectSchema } from './objects/CurrencyDictionaryCreateManyInput.schema';

export const CurrencyDictionaryCreateManySchema: z.ZodType<Prisma.CurrencyDictionaryCreateManyArgs> = z.object({ data: z.union([ CurrencyDictionaryCreateManyInputObjectSchema, z.array(CurrencyDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CurrencyDictionaryCreateManyArgs>;

export const CurrencyDictionaryCreateManyZodSchema = z.object({ data: z.union([ CurrencyDictionaryCreateManyInputObjectSchema, z.array(CurrencyDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();