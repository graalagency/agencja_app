import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LanguageDictionaryCreateManyInputObjectSchema as LanguageDictionaryCreateManyInputObjectSchema } from './objects/LanguageDictionaryCreateManyInput.schema';

export const LanguageDictionaryCreateManySchema: z.ZodType<Prisma.LanguageDictionaryCreateManyArgs> = z.object({ data: z.union([ LanguageDictionaryCreateManyInputObjectSchema, z.array(LanguageDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDictionaryCreateManyArgs>;

export const LanguageDictionaryCreateManyZodSchema = z.object({ data: z.union([ LanguageDictionaryCreateManyInputObjectSchema, z.array(LanguageDictionaryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();