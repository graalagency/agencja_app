import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema';
import { AgreementRightArgsObjectSchema as AgreementRightArgsObjectSchema } from './AgreementRightArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  agreementId: z.boolean().optional(),
  rightId: z.boolean().optional(),
  step: z.boolean().optional(),
  copiesMax: z.boolean().optional(),
  rate: z.boolean().optional(),
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional(),
  Right: z.union([z.boolean(), z.lazy(() => AgreementRightArgsObjectSchema)]).optional()
}).strict();
export const AgreementRoyRateSelectObjectSchema: z.ZodType<Prisma.AgreementRoyRateSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateSelect>;
export const AgreementRoyRateSelectObjectZodSchema = makeSchema();
