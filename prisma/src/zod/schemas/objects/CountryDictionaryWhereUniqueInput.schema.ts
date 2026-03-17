import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string().optional()
}).strict();
export const CountryDictionaryWhereUniqueInputObjectSchema: z.ZodType<Prisma.CountryDictionaryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryDictionaryWhereUniqueInput>;
export const CountryDictionaryWhereUniqueInputObjectZodSchema = makeSchema();
