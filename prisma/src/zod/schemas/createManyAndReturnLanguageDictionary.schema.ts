import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionarySelectObjectSchema as LanguageDictionarySelectObjectSchema } from './objects/LanguageDictionarySelect.schema';
import { LanguageDictionaryCreateManyInputObjectSchema as LanguageDictionaryCreateManyInputObjectSchema } from './objects/LanguageDictionaryCreateManyInput.schema';

export const LanguageDictionaryCreateManyAndReturnSchema: z.ZodType<Prisma.LanguageDictionaryCreateManyAndReturnArgs> = z.object({ select: LanguageDictionarySelectObjectSchema.optional(), data: z.union([ LanguageDictionaryCreateManyInputObjectSchema, z.array(LanguageDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryCreateManyAndReturnArgs>;

export const LanguageDictionaryCreateManyAndReturnZodSchema = z.object({ select: LanguageDictionarySelectObjectSchema.optional(), data: z.union([ LanguageDictionaryCreateManyInputObjectSchema, z.array(LanguageDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();