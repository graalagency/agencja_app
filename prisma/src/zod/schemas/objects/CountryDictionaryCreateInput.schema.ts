import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  description: z.string(),
  code: z.string(),
  tax: z.number(),
  eu: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const CountryDictionaryCreateInputObjectSchema: z.ZodType<Prisma.CountryDictionaryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionaryCreateInput>;
export const CountryDictionaryCreateInputObjectZodSchema = makeSchema();
