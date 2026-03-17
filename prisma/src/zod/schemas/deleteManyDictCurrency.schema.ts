import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencyWhereInputObjectSchema as DictCurrencyWhereInputObjectSchema } from './objects/DictCurrencyWhereInput.schema';

export const DictCurrencyDeleteManySchema: z.ZodType<Prisma.DictCurrencyDeleteManyArgs> = z.object({ where: DictCurrencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyDeleteManyArgs>;

export const DictCurrencyDeleteManyZodSchema = z.object({ where: DictCurrencyWhereInputObjectSchema.optional() }).strict();