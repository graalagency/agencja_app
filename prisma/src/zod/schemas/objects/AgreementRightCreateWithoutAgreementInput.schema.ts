import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema as AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema } from './AgreementRoyRateCreateNestedManyWithoutRightInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  rightFormId: z.number().int().optional().nullable(),
  priceTypeId: z.number().int().optional().nullable(),
  royPriceTypeId: z.number().int().optional().nullable(),
  royAccountIntervalId: z.number().int().optional().nullable(),
  distributionTypeId: z.number().int().optional().nullable(),
  RoyRates: z.lazy(() => AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema).optional()
}).strict();
export const AgreementRightCreateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateWithoutAgreementInput>;
export const AgreementRightCreateWithoutAgreementInputObjectZodSchema = makeSchema();
