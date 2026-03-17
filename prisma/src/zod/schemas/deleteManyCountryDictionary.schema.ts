import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionaryWhereInputObjectSchema as CountryDictionaryWhereInputObjectSchema } from './objects/CountryDictionaryWhereInput.schema';

export const CountryDictionaryDeleteManySchema: z.ZodType<Prisma.CountryDictionaryDeleteManyArgs> = z.object({ where: CountryDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryDeleteManyArgs>;

export const CountryDictionaryDeleteManyZodSchema = z.object({ where: CountryDictionaryWhereInputObjectSchema.optional() }).strict();