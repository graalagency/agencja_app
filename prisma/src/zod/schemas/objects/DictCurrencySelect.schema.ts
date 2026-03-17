import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const DictCurrencySelectObjectSchema: z.ZodType<Prisma.DictCurrencySelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencySelect>;
export const DictCurrencySelectObjectZodSchema = makeSchema();
