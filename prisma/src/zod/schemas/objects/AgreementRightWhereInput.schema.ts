import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { AgreementScalarRelationFilterObjectSchema as AgreementScalarRelationFilterObjectSchema } from './AgreementScalarRelationFilter.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementRoyRateListRelationFilterObjectSchema as AgreementRoyRateListRelationFilterObjectSchema } from './AgreementRoyRateListRelationFilter.schema'

const agreementrightwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementRightWhereInputObjectSchema), z.lazy(() => AgreementRightWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementRightWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementRightWhereInputObjectSchema), z.lazy(() => AgreementRightWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  agreementId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rightFormId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  priceTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  royPriceTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  royAccountIntervalId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  distributionTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Agreement: z.union([z.lazy(() => AgreementScalarRelationFilterObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema)]).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateListRelationFilterObjectSchema).optional()
}).strict();
export const AgreementRightWhereInputObjectSchema: z.ZodType<Prisma.AgreementRightWhereInput> = agreementrightwhereinputSchema as unknown as z.ZodType<Prisma.AgreementRightWhereInput>;
export const AgreementRightWhereInputObjectZodSchema = agreementrightwhereinputSchema;
