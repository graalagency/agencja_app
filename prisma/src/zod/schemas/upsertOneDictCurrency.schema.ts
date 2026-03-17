import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyWhereUniqueInputObjectSchema as DictCurrencyWhereUniqueInputObjectSchema } from './objects/DictCurrencyWhereUniqueInput.schema';
import { DictCurrencyCreateInputObjectSchema as DictCurrencyCreateInputObjectSchema } from './objects/DictCurrencyCreateInput.schema';
import { DictCurrencyUncheckedCreateInputObjectSchema as DictCurrencyUncheckedCreateInputObjectSchema } from './objects/DictCurrencyUncheckedCreateInput.schema';
import { DictCurrencyUpdateInputObjectSchema as DictCurrencyUpdateInputObjectSchema } from './objects/DictCurrencyUpdateInput.schema';
import { DictCurrencyUncheckedUpdateInputObjectSchema as DictCurrencyUncheckedUpdateInputObjectSchema } from './objects/DictCurrencyUncheckedUpdateInput.schema';

export const DictCurrencyUpsertOneSchema: z.ZodType<Prisma.DictCurrencyUpsertArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(),  where: DictCurrencyWhereUniqueInputObjectSchema, create: z.union([ DictCurrencyCreateInputObjectSchema, DictCurrencyUncheckedCreateInputObjectSchema ]), update: z.union([ DictCurrencyUpdateInputObjectSchema, DictCurrencyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DictCurrencyUpsertArgs>;

export const DictCurrencyUpsertOneZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(),  where: DictCurrencyWhereUniqueInputObjectSchema, create: z.union([ DictCurrencyCreateInputObjectSchema, DictCurrencyUncheckedCreateInputObjectSchema ]), update: z.union([ DictCurrencyUpdateInputObjectSchema, DictCurrencyUncheckedUpdateInputObjectSchema ]) }).strict();