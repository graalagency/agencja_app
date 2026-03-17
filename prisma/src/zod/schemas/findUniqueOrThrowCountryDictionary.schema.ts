import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CountryDictionarySelectObjectSchema as CountryDictionarySelectObjectSchema } from './objects/CountryDictionarySelect.schema';
import { CountryDictionaryWhereUniqueInputObjectSchema as CountryDictionaryWhereUniqueInputObjectSchema } from './objects/CountryDictionaryWhereUniqueInput.schema';

export const CountryDictionaryFindUniqueOrThrowSchema: z.ZodType<Prisma.CountryDictionaryFindUniqueOrThrowArgs> = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  where: CountryDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CountryDictionaryFindUniqueOrThrowArgs>;

export const CountryDictionaryFindUniqueOrThrowZodSchema = z.object({ select: CountryDictionarySelectObjectSchema.optional(),  where: CountryDictionaryWhereUniqueInputObjectSchema }).strict();