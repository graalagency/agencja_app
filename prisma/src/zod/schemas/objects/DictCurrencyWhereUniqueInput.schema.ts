import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string().optional()
}).strict();
export const DictCurrencyWhereUniqueInputObjectSchema: z.ZodType<Prisma.DictCurrencyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyWhereUniqueInput>;
export const DictCurrencyWhereUniqueInputObjectZodSchema = makeSchema();
