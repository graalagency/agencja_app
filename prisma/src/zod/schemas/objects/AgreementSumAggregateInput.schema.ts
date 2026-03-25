import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  titleId: z.literal(true).optional(),
  validYY: z.literal(true).optional(),
  pubTermMM: z.literal(true).optional(),
  maxCopies: z.literal(true).optional(),
  minCopies: z.literal(true).optional(),
  copiesToOwner: z.literal(true).optional(),
  copiesToGraal: z.literal(true).optional(),
  commission: z.literal(true).optional(),
  commissionMaterials: z.literal(true).optional(),
  estimatedCopyPrice: z.literal(true).optional(),
  graalShare: z.literal(true).optional(),
  countryId: z.literal(true).optional(),
  agentId: z.literal(true).optional()
}).strict();
export const AgreementSumAggregateInputObjectSchema: z.ZodType<Prisma.AgreementSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementSumAggregateInputType>;
export const AgreementSumAggregateInputObjectZodSchema = makeSchema();
