import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionaryUpdateManyMutationInputObjectSchema as CountryDictionaryUpdateManyMutationInputObjectSchema } from './objects/CountryDictionaryUpdateManyMutationInput.schema';
import { CountryDictionaryWhereInputObjectSchema as CountryDictionaryWhereInputObjectSchema } from './objects/CountryDictionaryWhereInput.schema';

export const CountryDictionaryUpdateManySchema: z.ZodType<Prisma.CountryDictionaryUpdateManyArgs> = z.object({ data: CountryDictionaryUpdateManyMutationInputObjectSchema, where: CountryDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryUpdateManyArgs>;

export const CountryDictionaryUpdateManyZodSchema = z.object({ data: CountryDictionaryUpdateManyMutationInputObjectSchema, where: CountryDictionaryWhereInputObjectSchema.optional() }).strict();