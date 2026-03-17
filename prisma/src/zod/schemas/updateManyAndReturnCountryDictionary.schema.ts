import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './objects/CountryDictionarySelect.schema';
import { CountryDictionaryUpdateManyMutationInputObjectSchema as CountryDictionaryUpdateManyMutationInputObjectSchema } from './objects/CountryDictionaryUpdateManyMutationInput.schema';
import { CountryDictionaryWhereInputObjectSchema as CountryDictionaryWhereInputObjectSchema } from './objects/CountryDictionaryWhereInput.schema';

export const CountryDictionaryUpdateManyAndReturnSchema: z.ZodType<Prisma.CountryDictionaryUpdateManyAndReturnArgs> = z.object({ select: CountryDictionarySelectObjectSchema.optional(), data: CountryDictionaryUpdateManyMutationInputObjectSchema, where: CountryDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryUpdateManyAndReturnArgs>;

export const CountryDictionaryUpdateManyAndReturnZodSchema = z.object({ select: CountryDictionarySelectObjectSchema.optional(), data: CountryDictionaryUpdateManyMutationInputObjectSchema, where: CountryDictionaryWhereInputObjectSchema.optional() }).strict();