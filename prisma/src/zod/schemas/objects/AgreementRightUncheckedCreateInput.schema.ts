import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateUncheckedCreateNestedManyWithoutRightInputObjectSchema as AgreementRoyRateUncheckedCreateNestedManyWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedCreateNestedManyWithoutRightInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  agreementId: z.number().int(),
  rightFormId: z.number().int().optional().nullable(),
  priceTypeId: z.number().int().optional().nullable(),
  royPriceTypeId: z.number().int().optional().nullable(),
  royAccountIntervalId: z.number().int().optional().nullable(),
  distributionTypeId: z.number().int().optional().nullable(),
  RoyRates: z.lazy(() => AgreementRoyRateUncheckedCreateNestedManyWithoutRightInputObjectSchema).optional()
}).strict();
export const AgreementRightUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AgreementRightUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUncheckedCreateInput>;
export const AgreementRightUncheckedCreateInputObjectZodSchema = makeSchema();
