import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyUpdateInputObjectSchema as DictCurrencyUpdateInputObjectSchema } from './objects/DictCurrencyUpdateInput.schema';
import { DictCurrencyUncheckedUpdateInputObjectSchema as DictCurrencyUncheckedUpdateInputObjectSchema } from './objects/DictCurrencyUncheckedUpdateInput.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';

export const DictCurrencyUpdateOneSchema: z.ZodType<Prisma.DictCurrencyUpdateArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(),  data: z.union([DictCurrencyUpdateInputObjectSchema, DictCurrencyUncheckedUpdateInputObjectSchema]), where: DictCurrencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCurrencyUpdateArgs>;

export const DictCurrencyUpdateOneZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(),  data: z.union([DictCurrencyUpdateInputObjectSchema, DictCurrencyUncheckedUpdateInputObjectSchema]), where: DictCurrencyWhereUniqueInputObjectSchema }).strict();