import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  instalment: z.number().int().optional().nullable(),
  advTermId: z.number().int().optional().nullable(),
  advTypeId: z.number().int().optional().nullable(),
  amount: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
}),
  termDate: z.coerce.date().optional().nullable(),
  royaltyId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceUncheckedCreateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceUncheckedCreateWithoutAgreementInput>;
export const AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectZodSchema = makeSchema();
