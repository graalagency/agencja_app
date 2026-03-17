import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DictLanguageSumAggregateInputObjectSchema: z.ZodType<Prisma.DictLanguageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguageSumAggregateInputType>;
export const DictLanguageSumAggregateInputObjectZodSchema = makeSchema();
