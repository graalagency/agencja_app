import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';

export const DictCurrencyFindUniqueSchema: z.ZodType<Prisma.DictCurrencyFindUniqueArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(),  where: DictCurrencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCurrencyFindUniqueArgs>;

export const DictCurrencyFindUniqueZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(),  where: DictCurrencyWhereUniqueInputObjectSchema }).strict();