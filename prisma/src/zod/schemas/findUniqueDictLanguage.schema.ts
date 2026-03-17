import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';

export const DictLanguageFindUniqueSchema: z.ZodType<Prisma.DictLanguageFindUniqueArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictLanguageFindUniqueArgs>;

export const DictLanguageFindUniqueZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema }).strict();