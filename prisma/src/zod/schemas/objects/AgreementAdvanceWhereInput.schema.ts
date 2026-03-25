import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AgreementScalarRelationFilterObjectSchema as AgreementScalarRelationFilterObjectSchema } from './AgreementScalarRelationFilter.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const agreementadvancewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementAdvanceWhereInputObjectSchema), z.lazy(() => AgreementAdvanceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementAdvanceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementAdvanceWhereInputObjectSchema), z.lazy(() => AgreementAdvanceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  agreementId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  instalment: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  advTermId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  advTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  amount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
})]).optional(),
  termDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  royaltyId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Agreement: z.union([z.lazy(() => AgreementScalarRelationFilterObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema)]).optional()
}).strict();
export const AgreementAdvanceWhereInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceWhereInput> = agreementadvancewhereinputSchema as unknown as z.ZodType<Prisma.AgreementAdvanceWhereInput>;
export const AgreementAdvanceWhereInputObjectZodSchema = agreementadvancewhereinputSchema;
