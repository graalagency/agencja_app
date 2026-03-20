import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const TitleWhereUniqueInputObjectSchema: z.ZodType<Prisma.TitleWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleWhereUniqueInput>;
export const TitleWhereUniqueInputObjectZodSchema = makeSchema();
