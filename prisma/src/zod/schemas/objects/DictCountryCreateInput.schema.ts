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
export const DictCountryCreateInputObjectSchema: z.ZodType<Prisma.DictCountryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryCreateInput>;
export const DictCountryCreateInputObjectZodSchema = makeSchema();
