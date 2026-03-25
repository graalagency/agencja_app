import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { AgreementScalarRelationFilterObjectSchema as AgreementScalarRelationFilterObjectSchema } from './AgreementScalarRelationFilter.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementRightScalarRelationFilterObjectSchema as AgreementRightScalarRelationFilterObjectSchema } from './AgreementRightScalarRelationFilter.schema';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './AgreementRightWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const agreementroyratewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementRoyRateWhereInputObjectSchema), z.lazy(() => AgreementRoyRateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementRoyRateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementRoyRateWhereInputObjectSchema), z.lazy(() => AgreementRoyRateWhereInputObjectSchema).array()]).optional(),
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
})]).optional(),
  Agreement: z.union([z.lazy(() => AgreementScalarRelationFilterObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema)]).optional(),
  Right: z.union([z.lazy(() => AgreementRightScalarRelationFilterObjectSchema), z.lazy(() => AgreementRightWhereInputObjectSchema)]).optional()
}).strict();
export const AgreementRoyRateWhereInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateWhereInput> = agreementroyratewhereinputSchema as unknown as z.ZodType<Prisma.AgreementRoyRateWhereInput>;
export const AgreementRoyRateWhereInputObjectZodSchema = agreementroyratewhereinputSchema;
