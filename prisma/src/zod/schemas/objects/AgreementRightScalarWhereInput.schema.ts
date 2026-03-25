import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const agreementrightscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementRightScalarWhereInputObjectSchema), z.lazy(() => AgreementRightScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementRightScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementRightScalarWhereInputObjectSchema), z.lazy(() => AgreementRightScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  agreementId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rightFormId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  priceTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  royPriceTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  royAccountIntervalId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  distributionTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AgreementRightScalarWhereInputObjectSchema: z.ZodType<Prisma.AgreementRightScalarWhereInput> = agreementrightscalarwhereinputSchema as unknown as z.ZodType<Prisma.AgreementRightScalarWhereInput>;
export const AgreementRightScalarWhereInputObjectZodSchema = agreementrightscalarwhereinputSchema;
