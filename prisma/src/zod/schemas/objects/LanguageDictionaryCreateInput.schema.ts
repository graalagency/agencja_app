import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  code: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const LanguageDictionaryCreateInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryCreateInput>;
export const LanguageDictionaryCreateInputObjectZodSchema = makeSchema();
