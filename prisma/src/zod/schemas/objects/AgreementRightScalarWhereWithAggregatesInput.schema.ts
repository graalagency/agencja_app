import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const agreementrightscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementRightScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgreementRightScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementRightScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementRightScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgreementRightScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  agreementId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  rightFormId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  priceTypeId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  royPriceTypeId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  royAccountIntervalId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  distributionTypeId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AgreementRightScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AgreementRightScalarWhereWithAggregatesInput> = agreementrightscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AgreementRightScalarWhereWithAggregatesInput>;
export const AgreementRightScalarWhereWithAggregatesInputObjectZodSchema = agreementrightscalarwherewithaggregatesinputSchema;
