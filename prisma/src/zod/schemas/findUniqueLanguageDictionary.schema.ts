import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';

export const LanguageDictionaryFindUniqueSchema: z.ZodType<Prisma.LanguageDictionaryFindUniqueArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryFindUniqueArgs>;

export const LanguageDictionaryFindUniqueZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict();