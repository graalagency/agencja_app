import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  agreementId: z.literal(true).optional(),
  rightFormId: z.literal(true).optional(),
  priceTypeId: z.literal(true).optional(),
  royPriceTypeId: z.literal(true).optional(),
  royAccountIntervalId: z.literal(true).optional(),
  distributionTypeId: z.literal(true).optional()
}).strict();
export const AgreementRightAvgAggregateInputObjectSchema: z.ZodType<Prisma.AgreementRightAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightAvgAggregateInputType>;
export const AgreementRightAvgAggregateInputObjectZodSchema = makeSchema();
