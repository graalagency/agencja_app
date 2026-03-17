import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageCreateManyInputObjectSchema as DictLanguageCreateManyInputObjectSchema } from './objects/DictLanguageCreateManyInput.schema';

export const DictLanguageCreateManySchema: z.ZodType<Prisma.DictLanguageCreateManyArgs> = z.object({ data: z.union([ DictLanguageCreateManyInputObjectSchema, z.array(DictLanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageCreateManyArgs>;

export const DictLanguageCreateManyZodSchema = z.object({ data: z.union([ DictLanguageCreateManyInputObjectSchema, z.array(DictLanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();