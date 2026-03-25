import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const agreementroyratescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementRoyRateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgreementRoyRateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementRoyRateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementRoyRateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgreementRoyRateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  agreementId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  rightId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  copiesMax: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  rate: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'rate' must be a Decimal",
})]).optional()
}).strict();
export const AgreementRoyRateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateScalarWhereWithAggregatesInput> = agreementroyratescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AgreementRoyRateScalarWhereWithAggregatesInput>;
export const AgreementRoyRateScalarWhereWithAggregatesInputObjectZodSchema = agreementroyratescalarwherewithaggregatesinputSchema;
