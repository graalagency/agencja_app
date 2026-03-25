import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const agreementroyratescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema), z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema), z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  agreementId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rightId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  copiesMax: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  rate: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'rate' must be a Decimal",
})]).optional()
}).strict();
export const AgreementRoyRateScalarWhereInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateScalarWhereInput> = agreementroyratescalarwhereinputSchema as unknown as z.ZodType<Prisma.AgreementRoyRateScalarWhereInput>;
export const AgreementRoyRateScalarWhereInputObjectZodSchema = agreementroyratescalarwhereinputSchema;
