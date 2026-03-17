import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const LanguageDictionarySelectObjectSchema: z.ZodType<Prisma.LanguageDictionarySelect> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionarySelect>;
export const LanguageDictionarySelectObjectZodSchema = makeSchema();
