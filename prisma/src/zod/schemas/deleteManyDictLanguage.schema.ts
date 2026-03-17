import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictLanguageWhereInputObjectSchema as DictLanguageWhereInputObjectSchema } from './objects/DictLanguageWhereInput.schema';

export const DictLanguageDeleteManySchema: z.ZodType<Prisma.DictLanguageDeleteManyArgs> = z.object({ where: DictLanguageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictLanguageDeleteManyArgs>;

export const DictLanguageDeleteManyZodSchema = z.object({ where: DictLanguageWhereInputObjectSchema.optional() }).strict();