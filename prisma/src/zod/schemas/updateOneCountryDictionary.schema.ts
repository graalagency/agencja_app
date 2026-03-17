import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './objects/CountryDictionarySelect.schema';
import { CountryDictionaryUpdateInputObjectSchema as CountryDictionaryUpdateInputObjectSchema } from './objects/CountryDictionaryUpdateInput.schema';
import { CountryDictionaryUncheckedUpdateInputObjectSchema as CountryDictionaryUncheckedUpdateInputObjectSchema } from './objects/CountryDictionaryUncheckedUpdateInput.schema';
import { CountryDictionaryWhereUniqueInputObjectSchema as CountryDictionaryWhereUniqueInputObjectSchema } from './objects/CountryDictionaryWhereUniqueInput.schema';

export const CountryDictionaryUpdateOneSchema: z.ZodType<Prisma.CountryDictionaryUpdateArgs> = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  data: z.union([CountryDictionaryUpdateInputObjectSchema, CountryDictionaryUncheckedUpdateInputObjectSchema]), where: CountryDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryUpdateArgs>;

export const CountryDictionaryUpdateOneZodSchema = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  data: z.union([CountryDictionaryUpdateInputObjectSchema, CountryDictionaryUncheckedUpdateInputObjectSchema]), where: CountryDictionaryWhereUniqueInputObjectSchema }).strict();