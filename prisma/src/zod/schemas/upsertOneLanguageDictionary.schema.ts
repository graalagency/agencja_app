import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryWhereUniqueInputObjectSchema as LanguageDictionaryWhereUniqueInputObjectSchema } from './objects/LanguageDictionaryWhereUniqueInput.schema';
import { LanguageDictionaryCreateInputObjectSchema as LanguageDictionaryCreateInputObjectSchema } from './objects/LanguageDictionaryCreateInput.schema';
import { LanguageDictionaryUncheckedCreateInputObjectSchema as LanguageDictionaryUncheckedCreateInputObjectSchema } from './objects/LanguageDictionaryUncheckedCreateInput.schema';
import { LanguageDictionaryUpdateInputObjectSchema as LanguageDictionaryUpdateInputObjectSchema } from './objects/LanguageDictionaryUpdateInput.schema';
import { LanguageDictionaryUncheckedUpdateInputObjectSchema as LanguageDictionaryUncheckedUpdateInputObjectSchema } from './objects/LanguageDictionaryUncheckedUpdateInput.schema';

export const LanguageDictionaryUpsertOneSchema: z.ZodType<Prisma.LanguageDictionaryUpsertArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema, create: z.union([ LanguageDictionaryCreateInputObjectSchema, LanguageDictionaryUncheckedCreateInputObjectSchema ]), update: z.union([ LanguageDictionaryUpdateInputObjectSchema, LanguageDictionaryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryUpsertArgs>;

export const LanguageDictionaryUpsertOneZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(),  where: LanguageDictionaryWhereUniqueInputObjectSchema, create: z.union([ LanguageDictionaryCreateInputObjectSchema, LanguageDictionaryUncheckedCreateInputObjectSchema ]), update: z.union([ LanguageDictionaryUpdateInputObjectSchema, LanguageDictionaryUncheckedUpdateInputObjectSchema ]) }).strict();