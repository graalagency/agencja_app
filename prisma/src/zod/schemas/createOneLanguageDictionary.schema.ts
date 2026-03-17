import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryCreateInputObjectSchema as LanguageDictionaryCreateInputObjectSchema } from './objects/LanguageDictionaryCreateInput.schema';
import { LanguageDictionaryUncheckedCreateInputObjectSchema as LanguageDictionaryUncheckedCreateInputObjectSchema } from './objects/LanguageDictionaryUncheckedCreateInput.schema';

export const LanguageDictionaryCreateOneSchema: z.ZodType<Prisma.LanguageDictionaryCreateArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  data: z.union([LanguageDictionaryCreateInputObjectSchema, LanguageDictionaryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryCreateArgs>;

export const LanguageDictionaryCreateOneZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  data: z.union([LanguageDictionaryCreateInputObjectSchema, LanguageDictionaryUncheckedCreateInputObjectSchema]) }).strict();