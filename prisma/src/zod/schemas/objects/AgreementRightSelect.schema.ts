import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema';
import { AgreementRoyRateFindManySchema as AgreementRoyRateFindManySchema } from '../findManyAgreementRoyRate.schema';
import { AgreementRightCountOutputTypeArgsObjectSchema as AgreementRightCountOutputTypeArgsObjectSchema } from './AgreementRightCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  agreementId: z.boolean().optional(),
  rightFormId: z.boolean().optional(),
  priceTypeId: z.boolean().optional(),
  royPriceTypeId: z.boolean().optional(),
  royAccountIntervalId: z.boolean().optional(),
  distributionTypeId: z.boolean().optional(),
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional(),
  RoyRates: z.union([z.boolean(), z.lazy(() => AgreementRoyRateFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgreementRightCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgreementRightSelectObjectSchema: z.ZodType<Prisma.AgreementRightSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightSelect>;
export const AgreementRightSelectObjectZodSchema = makeSchema();
