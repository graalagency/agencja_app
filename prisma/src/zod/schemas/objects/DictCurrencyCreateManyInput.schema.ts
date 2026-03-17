import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const DictCurrencyCreateManyInputObjectSchema: z.ZodType<Prisma.DictCurrencyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyCreateManyInput>;
export const DictCurrencyCreateManyInputObjectZodSchema = makeSchema();
