import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateNestedOneWithoutRightsInputObjectSchema as AgreementCreateNestedOneWithoutRightsInputObjectSchema } from './AgreementCreateNestedOneWithoutRightsInput.schema';
import { AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema as AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema } from './AgreementRoyRateCreateNestedManyWithoutRightInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  rightFormId: z.number().int().optional().nullable(),
  priceTypeId: z.number().int().optional().nullable(),
  royPriceTypeId: z.number().int().optional().nullable(),
  royAccountIntervalId: z.number().int().optional().nullable(),
  distributionTypeId: z.number().int().optional().nullable(),
  Agreement: z.lazy(() => AgreementCreateNestedOneWithoutRightsInputObjectSchema),
  RoyRates: z.lazy(() => AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema).optional()
}).strict();
export const AgreementRightCreateInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateInput>;
export const AgreementRightCreateInputObjectZodSchema = makeSchema();
