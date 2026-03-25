import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema as AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema } from './AgreementCreateNestedOneWithoutRoyRatesInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  step: z.number().int(),
  copiesMax: z.number().int().optional().nullable(),
  rate: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'rate' must be a Decimal",
}),
  Agreement: z.lazy(() => AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema)
}).strict();
export const AgreementRoyRateCreateWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateWithoutRightInput>;
export const AgreementRoyRateCreateWithoutRightInputObjectZodSchema = makeSchema();
