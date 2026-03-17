import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string().optional()
}).strict();
export const DictLanguageWhereUniqueInputObjectSchema: z.ZodType<Prisma.DictLanguageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguageWhereUniqueInput>;
export const DictLanguageWhereUniqueInputObjectZodSchema = makeSchema();
