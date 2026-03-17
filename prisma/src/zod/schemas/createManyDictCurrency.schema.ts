import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCurrencyCreateManyInputObjectSchema as DictCurrencyCreateManyInputObjectSchema } from './objects/DictCurrencyCreateManyInput.schema';

export const DictCurrencyCreateManySchema: z.ZodType<Prisma.DictCurrencyCreateManyArgs> = z.object({ data: z.union([ DictCurrencyCreateManyInputObjectSchema, z.array(DictCurrencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DictCurrencyCreateManyArgs>;

export const DictCurrencyCreateManyZodSchema = z.object({ data: z.union([ DictCurrencyCreateManyInputObjectSchema, z.array(DictCurrencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();