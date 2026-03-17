import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './objects/CountryDictionarySelect.schema';
import { CountryDictionaryCreateInputObjectSchema as CountryDictionaryCreateInputObjectSchema } from './objects/CountryDictionaryCreateInput.schema';
import { CountryDictionaryUncheckedCreateInputObjectSchema as CountryDictionaryUncheckedCreateInputObjectSchema } from './objects/CountryDictionaryUncheckedCreateInput.schema';

export const CountryDictionaryCreateOneSchema: z.ZodType<Prisma.CountryDictionaryCreateArgs> = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  data: z.union([CountryDictionaryCreateInputObjectSchema, CountryDictionaryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryCreateArgs>;

export const CountryDictionaryCreateOneZodSchema = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  data: z.union([CountryDictionaryCreateInputObjectSchema, CountryDictionaryUncheckedCreateInputObjectSchema]) }).strict();