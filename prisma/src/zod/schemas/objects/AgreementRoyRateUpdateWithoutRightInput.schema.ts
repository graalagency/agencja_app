import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { AgreementUpdateOneRequiredWithoutRoyRatesNestedInputObjectSchema as AgreementUpdateOneRequiredWithoutRoyRatesNestedInputObjectSchema } from './AgreementUpdateOneRequiredWithoutRoyRatesNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  step: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  copiesMax: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rate: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'rate' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  Agreement: z.lazy(() => AgreementUpdateOneRequiredWithoutRoyRatesNestedInputObjectSchema).optional()
}).strict();
export const AgreementRoyRateUpdateWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpdateWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateWithoutRightInput>;
export const AgreementRoyRateUpdateWithoutRightInputObjectZodSchema = makeSchema();
