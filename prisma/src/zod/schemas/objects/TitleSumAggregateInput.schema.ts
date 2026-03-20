import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  edition: z.literal(true).optional(),
  pages: z.literal(true).optional(),
  volume: z.literal(true).optional(),
  totalVolumes: z.literal(true).optional()
}).strict();
export const TitleSumAggregateInputObjectSchema: z.ZodType<Prisma.TitleSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TitleSumAggregateInputType>;
export const TitleSumAggregateInputObjectZodSchema = makeSchema();
