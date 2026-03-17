import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyCreateInputObjectSchema as DictCurrencyCreateInputObjectSchema } from './objects/DictCurrencyCreateInput.schema';
import { DictCurrencyUncheckedCreateInputObjectSchema as DictCurrencyUncheckedCreateInputObjectSchema } from './objects/DictCurrencyUncheckedCreateInput.schema';

export const DictCurrencyCreateOneSchema: z.ZodType<Prisma.DictCurrencyCreateArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(),  data: z.union([DictCurrencyCreateInputObjectSchema, DictCurrencyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DictCurrencyCreateArgs>;

export const DictCurrencyCreateOneZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(),  data: z.union([DictCurrencyCreateInputObjectSchema, DictCurrencyUncheckedCreateInputObjectSchema]) }).strict();