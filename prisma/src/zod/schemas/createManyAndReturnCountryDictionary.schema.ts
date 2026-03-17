import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './objects/CountryDictionarySelect.schema';
import { CountryDictionaryCreateManyInputObjectSchema as CountryDictionaryCreateManyInputObjectSchema } from './objects/CountryDictionaryCreateManyInput.schema';

export const CountryDictionaryCreateManyAndReturnSchema: z.ZodType<Prisma.CountryDictionaryCreateManyAndReturnArgs> = z.object({ select: CountryDictionarySelectObjectSchema.optional(), data: z.union([ CountryDictionaryCreateManyInputObjectSchema, z.array(CountryDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryCreateManyAndReturnArgs>;

export const CountryDictionaryCreateManyAndReturnZodSchema = z.object({ select: CountryDictionarySelectObjectSchema.optional(), data: z.union([ CountryDictionaryCreateManyInputObjectSchema, z.array(CountryDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();