import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencySelectObjectSchema as DictCurrencySelectObjectSchema } from './objects/DictCurrencySelect.schema';
import { DictCurrencyCreateManyInputObjectSchema as DictCurrencyCreateManyInputObjectSchema } from './objects/DictCurrencyCreateManyInput.schema';

export const DictCurrencyCreateManyAndReturnSchema: z.ZodType<Prisma.DictCurrencyCreateManyAndReturnArgs> = z.object({ select: DictCurrencySelectObjectSchema.optional(), data: z.union([ DictCurrencyCreateManyInputObjectSchema, z.array(DictCurrencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyCreateManyAndReturnArgs>;

export const DictCurrencyCreateManyAndReturnZodSchema = z.object({ select: DictCurrencySelectObjectSchema.optional(), data: z.union([ DictCurrencyCreateManyInputObjectSchema, z.array(DictCurrencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();