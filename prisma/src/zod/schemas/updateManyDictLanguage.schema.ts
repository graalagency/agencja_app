import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageUpdateManyMutationInputObjectSchema as DictLanguageUpdateManyMutationInputObjectSchema } from './objects/DictLanguageUpdateManyMutationInput.schema';
import { DictLanguageWhereInputObjectSchema as DictLanguageWhereInputObjectSchema } from './objects/DictLanguageWhereInput.schema';

export const DictLanguageUpdateManySchema: z.ZodType<Prisma.DictLanguageUpdateManyArgs> = z.object({ data: DictLanguageUpdateManyMutationInputObjectSchema, where: DictLanguageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageUpdateManyArgs>;

export const DictLanguageUpdateManyZodSchema = z.object({ data: DictLanguageUpdateManyMutationInputObjectSchema, where: DictLanguageWhereInputObjectSchema.optional() }).strict();