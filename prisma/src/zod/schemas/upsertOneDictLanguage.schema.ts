import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageSelectObjectSchema as DictLanguageSelectObjectSchema } from './objects/DictLanguageSelect.schema';
import { DictLanguageWhereUniqueInputObjectSchema as DictLanguageWhereUniqueInputObjectSchema } from './objects/DictLanguageWhereUniqueInput.schema';
import { DictLanguageCreateInputObjectSchema as DictLanguageCreateInputObjectSchema } from './objects/DictLanguageCreateInput.schema';
import { DictLanguageUncheckedCreateInputObjectSchema as DictLanguageUncheckedCreateInputObjectSchema } from './objects/DictLanguageUncheckedCreateInput.schema';
import { DictLanguageUpdateInputObjectSchema as DictLanguageUpdateInputObjectSchema } from './objects/DictLanguageUpdateInput.schema';
import { DictLanguageUncheckedUpdateInputObjectSchema as DictLanguageUncheckedUpdateInputObjectSchema } from './objects/DictLanguageUncheckedUpdateInput.schema';

export const DictLanguageUpsertOneSchema: z.ZodType<Prisma.DictLanguageUpsertArgs> = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema, create: z.union([ DictLanguageCreateInputObjectSchema, DictLanguageUncheckedCreateInputObjectSchema ]), update: z.union([ DictLanguageUpdateInputObjectSchema, DictLanguageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DictLanguageUpsertArgs>;

export const DictLanguageUpsertOneZodSchema = z.object({ select: DictLanguageSelectObjectSchema.optional(),  where: DictLanguageWhereUniqueInputObjectSchema, create: z.union([ DictLanguageCreateInputObjectSchema, DictLanguageUncheckedCreateInputObjectSchema ]), update: z.union([ DictLanguageUpdateInputObjectSchema, DictLanguageUncheckedUpdateInputObjectSchema ]) }).strict();