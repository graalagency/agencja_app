import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageCreateManyInputObjectSchema as DictLanguageCreateManyInputObjectSchema } from './objects/DictLanguageCreateManyInput.schema';

export const DictLanguageCreateManyAndReturnSchema: z.ZodType<Prisma.DictLanguageCreateManyAndReturnArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(), data: z.union([ DictLanguageCreateManyInputObjectSchema, z.array(DictLanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageCreateManyAndReturnArgs>;

export const DictLanguageCreateManyAndReturnZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(), data: z.union([ DictLanguageCreateManyInputObjectSchema, z.array(DictLanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();