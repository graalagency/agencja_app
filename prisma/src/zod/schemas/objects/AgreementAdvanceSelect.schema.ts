import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  agreementId: z.boolean().optional(),
  instalment: z.boolean().optional(),
  advTermId: z.boolean().optional(),
  advTypeId: z.boolean().optional(),
  amount: z.boolean().optional(),
  termDate: z.boolean().optional(),
  royaltyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional()
}).strict();
export const AgreementAdvanceSelectObjectSchema: z.ZodType<Prisma.AgreementAdvanceSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceSelect>;
export const AgreementAdvanceSelectObjectZodSchema = makeSchema();
