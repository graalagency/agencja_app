import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionaryCreateManyInputObjectSchema as CountryDictionaryCreateManyInputObjectSchema } from './objects/CountryDictionaryCreateManyInput.schema';

export const CountryDictionaryCreateManySchema: z.ZodType<Prisma.CountryDictionaryCreateManyArgs> = z.object({ data: z.union([ CountryDictionaryCreateManyInputObjectSchema, z.array(CountryDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryCreateManyArgs>;

export const CountryDictionaryCreateManyZodSchema = z.object({ data: z.union([ CountryDictionaryCreateManyInputObjectSchema, z.array(CountryDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();