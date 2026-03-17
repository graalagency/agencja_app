import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionaryWhereInputObjectSchema as LanguageDictionaryWhereInputObjectSchema } from './objects/LanguageDictionaryWhereInput.schema';

export const LanguageDictionaryDeleteManySchema: z.ZodType<Prisma.LanguageDictionaryDeleteManyArgs> = z.object({ where: LanguageDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryDeleteManyArgs>;

export const LanguageDictionaryDeleteManyZodSchema = z.object({ where: LanguageDictionaryWhereInputObjectSchema.optional() }).strict();