import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema as AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema } from './AgreementCreateNestedOneWithoutRoyRatesInput.schema';
import { AgreementRightCreateNestedOneWithoutRoyRatesInputObjectSchema as AgreementRightCreateNestedOneWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateNestedOneWithoutRoyRatesInput.schema'

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
  Agreement: z.lazy(() => AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema),
  Right: z.lazy(() => AgreementRightCreateNestedOneWithoutRoyRatesInputObjectSchema)
}).strict();
export const AgreementRoyRateCreateInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateInput>;
export const AgreementRoyRateCreateInputObjectZodSchema = makeSchema();
