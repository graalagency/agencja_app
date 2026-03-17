import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';

export const DictCurrencyFindUniqueOrThrowSchema: z.ZodType<Prisma.DictCurrencyFindUniqueOrThrowArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(),  where: DictCurrencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCurrencyFindUniqueOrThrowArgs>;

export const DictCurrencyFindUniqueOrThrowZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(),  where: DictCurrencyWhereUniqueInputObjectSchema }).strict();