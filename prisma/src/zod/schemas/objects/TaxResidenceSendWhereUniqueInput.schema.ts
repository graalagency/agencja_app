import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const TaxResidenceSendWhereUniqueInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendWhereUniqueInput>;
export const TaxResidenceSendWhereUniqueInputObjectZodSchema = makeSchema();
