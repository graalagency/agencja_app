import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  commission: z.literal(true).optional(),
  commissionForeign: z.literal(true).optional(),
  commissionMaterials: z.literal(true).optional(),
  repModeId: z.literal(true).optional(),
  parentId: z.literal(true).optional()
}).strict();
export const PublisherAvgAggregateInputObjectSchema: z.ZodType<Prisma.PublisherAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherAvgAggregateInputType>;
export const PublisherAvgAggregateInputObjectZodSchema = makeSchema();
