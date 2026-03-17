import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';

export const DictLanguageFindUniqueOrThrowSchema: z.ZodType<Prisma.DictLanguageFindUniqueOrThrowArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictLanguageFindUniqueOrThrowArgs>;

export const DictLanguageFindUniqueOrThrowZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema }).strict();