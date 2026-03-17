import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  code: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const CurrencyDictionaryCreateInputObjectSchema: z.ZodType<Prisma.CurrencyDictionaryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CurrencyDictionaryCreateInput>;
export const CurrencyDictionaryCreateInputObjectZodSchema = makeSchema();
