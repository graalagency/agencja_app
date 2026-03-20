import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const PublisherWhereUniqueInputObjectSchema: z.ZodType<Prisma.PublisherWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherWhereUniqueInput>;
export const PublisherWhereUniqueInputObjectZodSchema = makeSchema();
