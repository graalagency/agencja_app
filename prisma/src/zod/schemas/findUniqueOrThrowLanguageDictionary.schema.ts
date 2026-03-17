import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';

export const LanguageDictionaryFindUniqueOrThrowSchema: z.ZodType<Prisma.LanguageDictionaryFindUniqueOrThrowArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryFindUniqueOrThrowArgs>;

export const LanguageDictionaryFindUniqueOrThrowZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema }).strict();