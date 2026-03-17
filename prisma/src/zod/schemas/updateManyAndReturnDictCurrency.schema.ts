import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyUpdateManyMutationInputObjectSchema as DictCurrencyUpdateManyMutationInputObjectSchema } from './objects/DictCurrencyUpdateManyMutationInput.schema';
import { DictCurrencyWhereInputObjectSchema as DictCurrencyWhereInputObjectSchema } from './objects/DictCurrencyWhereInput.schema';

export const DictCurrencyUpdateManyAndReturnSchema: z.ZodType<Prisma.DictCurrencyUpdateManyAndReturnArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(), data: DictCurrencyUpdateManyMutationInputObjectSchema, where: DictCurrencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyUpdateManyAndReturnArgs>;

export const DictCurrencyUpdateManyAndReturnZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(), data: DictCurrencyUpdateManyMutationInputObjectSchema, where: DictCurrencyWhereInputObjectSchema.optional() }).strict();