import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryUpdateManyMutationInputObjectSchema as LanguageDictionaryUpdateManyMutationInputObjectSchema } from './objects/LanguageDictionaryUpdateManyMutationInput.schema';
import { LanguageDictionaryWhereInputObjectSchema as LanguageDictionaryWhereInputObjectSchema } from './objects/LanguageDictionaryWhereInput.schema';

export const LanguageDictionaryUpdateManyAndReturnSchema: z.ZodType<Prisma.LanguageDictionaryUpdateManyAndReturnArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(), data: LanguageDictionaryUpdateManyMutationInputObjectSchema, where: LanguageDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryUpdateManyAndReturnArgs>;

export const LanguageDictionaryUpdateManyAndReturnZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(), data: LanguageDictionaryUpdateManyMutationInputObjectSchema, where: LanguageDictionaryWhereInputObjectSchema.optional() }).strict();