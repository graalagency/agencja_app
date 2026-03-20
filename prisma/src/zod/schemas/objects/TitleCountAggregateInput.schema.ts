import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  isbn: z.literal(true).optional(),
  languageCode: z.literal(true).optional(),
  classCode: z.literal(true).optional(),
  edition: z.literal(true).optional(),
  pages: z.literal(true).optional(),
  copyrightYear: z.literal(true).optional(),
  copyrightOwner: z.literal(true).optional(),
  keywords: z.literal(true).optional(),
  volume: z.literal(true).optional(),
  totalVolumes: z.literal(true).optional(),
  isHit: z.literal(true).optional(),
  isCollection: z.literal(true).optional(),
  isCD: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  dateOfReceipt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TitleCountAggregateInputObjectSchema: z.ZodType<Prisma.TitleCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TitleCountAggregateInputType>;
export const TitleCountAggregateInputObjectZodSchema = makeSchema();
