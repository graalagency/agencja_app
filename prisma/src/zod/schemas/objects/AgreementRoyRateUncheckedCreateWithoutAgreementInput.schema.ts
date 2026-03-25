import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  rightId: z.number().int(),
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
})
}).strict();
export const AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUncheckedCreateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUncheckedCreateWithoutAgreementInput>;
export const AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectZodSchema = makeSchema();
