import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string().optional()
}).strict();
export const LanguageDictionaryWhereUniqueInputObjectSchema: z.ZodType<Prisma.LanguageDictionaryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageDictionaryWhereUniqueInput>;
export const LanguageDictionaryWhereUniqueInputObjectZodSchema = makeSchema();
