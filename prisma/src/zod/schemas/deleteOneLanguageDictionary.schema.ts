import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';

export const LanguageDictionaryDeleteOneSchema: z.ZodType<Prisma.LanguageDictionaryDeleteArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryDeleteArgs>;

export const LanguageDictionaryDeleteOneZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict();