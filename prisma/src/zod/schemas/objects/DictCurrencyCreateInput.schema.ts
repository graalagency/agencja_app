import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  code: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const DictCurrencyCreateInputObjectSchema: z.ZodType<Prisma.DictCurrencyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrencyCreateInput>;
export const DictCurrencyCreateInputObjectZodSchema = makeSchema();
