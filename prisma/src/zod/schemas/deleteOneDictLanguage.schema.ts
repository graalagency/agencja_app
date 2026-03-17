import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';

export const DictLanguageDeleteOneSchema: z.ZodType<Prisma.DictLanguageDeleteArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictLanguageDeleteArgs>;

export const DictLanguageDeleteOneZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema }).strict();