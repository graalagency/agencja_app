import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionaryUpdateManyMutationInputObjectSchema as LanguageDictionaryUpdateManyMutationInputObjectSchema } from './objects/LanguageDictionaryUpdateManyMutationInput.schema';
import { LanguageDictionaryWhereInputObjectSchema as LanguageDictionaryWhereInputObjectSchema } from './objects/LanguageDictionaryWhereInput.schema';

export const LanguageDictionaryUpdateManySchema: z.ZodType<Prisma.LanguageDictionaryUpdateManyArgs> = z.object({ data: LanguageDictionaryUpdateManyMutationInputObjectSchema, where: LanguageDictionaryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryUpdateManyArgs>;

export const LanguageDictionaryUpdateManyZodSchema = z.object({ data: LanguageDictionaryUpdateManyMutationInputObjectSchema, where: LanguageDictionaryWhereInputObjectSchema.optional() }).strict();