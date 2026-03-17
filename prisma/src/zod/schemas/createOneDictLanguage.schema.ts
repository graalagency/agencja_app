import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageCreateInputObjectSchema as DictLanguageCreateInputObjectSchema } from './objects/DictLanguageCreateInput.schema';
import { DictLanguageUncheckedCreateInputObjectSchema as DictLanguageUncheckedCreateInputObjectSchema } from './objects/DictLanguageUncheckedCreateInput.schema';

export const DictLanguageCreateOneSchema: z.ZodType<Prisma.DictLanguageCreateArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(),  data: z.union([DictLanguageCreateInputObjectSchema, DictLanguageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DictLanguageCreateArgs>;

export const DictLanguageCreateOneZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(),  data: z.union([DictLanguageCreateInputObjectSchema, DictLanguageUncheckedCreateInputObjectSchema]) }).strict();