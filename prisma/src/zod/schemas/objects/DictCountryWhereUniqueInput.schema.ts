import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string().optional()
}).strict();
export const DictCountryWhereUniqueInputObjectSchema: z.ZodType<Prisma.DictCountryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DictCountryWhereUniqueInput>;
export const DictCountryWhereUniqueInputObjectZodSchema = makeSchema();
