import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencyUpdateManyMutationInputObjectSchema as DictCurrencyUpdateManyMutationInputObjectSchema } from './objects/DictCurrencyUpdateManyMutationInput.schema';
import { DictCurrencyWhereInputObjectSchema as DictCurrencyWhereInputObjectSchema } from './objects/DictCurrencyWhereInput.schema';

export const DictCurrencyUpdateManySchema: z.ZodType<Prisma.DictCurrencyUpdateManyArgs> = z.object({ data: DictCurrencyUpdateManyMutationInputObjectSchema, where: DictCurrencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyUpdateManyArgs>;

export const DictCurrencyUpdateManyZodSchema = z.object({ data: DictCurrencyUpdateManyMutationInputObjectSchema, where: DictCurrencyWhereInputObjectSchema.optional() }).strict();