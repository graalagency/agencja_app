import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  description: z.string(),
  code: z.string(),
  tax: z.number(),
  eu: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const CountryDictionaryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CountryDictionaryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionaryUncheckedCreateInput>;
export const CountryDictionaryUncheckedCreateInputObjectZodSchema = makeSchema();
