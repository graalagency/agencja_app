import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageUpdateManyMutationInputObjectSchema as DictLanguageUpdateManyMutationInputObjectSchema } from './objects/DictLanguageUpdateManyMutationInput.schema';
import { DictLanguageWhereInputObjectSchema as DictLanguageWhereInputObjectSchema } from './objects/DictLanguageWhereInput.schema';

export const DictLanguageUpdateManyAndReturnSchema: z.ZodType<Prisma.DictLanguageUpdateManyAndReturnArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(), data: DictLanguageUpdateManyMutationInputObjectSchema, where: DictLanguageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageUpdateManyAndReturnArgs>;

export const DictLanguageUpdateManyAndReturnZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(), data: DictLanguageUpdateManyMutationInputObjectSchema, where: DictLanguageWhereInputObjectSchema.optional() }).strict();