import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const TaxResidenceCertWhereUniqueInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertWhereUniqueInput>;
export const TaxResidenceCertWhereUniqueInputObjectZodSchema = makeSchema();
