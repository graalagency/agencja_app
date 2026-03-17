import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  code: z.boolean().optional(),
  tax: z.boolean().optional(),
  eu: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const DictCountrySelectObjectSchema: z.ZodType<Prisma.DictCountrySelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCountrySelect>;
export const DictCountrySelectObjectZodSchema = makeSchema();
