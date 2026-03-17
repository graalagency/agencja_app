import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './objects/CountryDictionarySelect.schema';
import { CountryDictionaryWhereUniqueInputObjectSchema as CountryDictionaryWhereUniqueInputObjectSchema } from './objects/CountryDictionaryWhereUniqueInput.schema';
import { CountryDictionaryCreateInputObjectSchema as CountryDictionaryCreateInputObjectSchema } from './objects/CountryDictionaryCreateInput.schema';
import { CountryDictionaryUncheckedCreateInputObjectSchema as CountryDictionaryUncheckedCreateInputObjectSchema } from './objects/CountryDictionaryUncheckedCreateInput.schema';
import { CountryDictionaryUpdateInputObjectSchema as CountryDictionaryUpdateInputObjectSchema } from './objects/CountryDictionaryUpdateInput.schema';
import { CountryDictionaryUncheckedUpdateInputObjectSchema as CountryDictionaryUncheckedUpdateInputObjectSchema } from './objects/CountryDictionaryUncheckedUpdateInput.schema';

export const CountryDictionaryUpsertOneSchema: z.ZodType<Prisma.CountryDictionaryUpsertArgs> = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  where: CountryDictionaryWhereUniqueInputObjectSchema, create: z.union([ CountryDictionaryCreateInputObjectSchema, CountryDictionaryUncheckedCreateInputObjectSchema ]), update: z.union([ CountryDictionaryUpdateInputObjectSchema, CountryDictionaryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryUpsertArgs>;

export const CountryDictionaryUpsertOneZodSchema = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  where: CountryDictionaryWhereUniqueInputObjectSchema, create: z.union([ CountryDictionaryCreateInputObjectSchema, CountryDictionaryUncheckedCreateInputObjectSchema ]), update: z.union([ CountryDictionaryUpdateInputObjectSchema, CountryDictionaryUncheckedUpdateInputObjectSchema ]) }).strict();