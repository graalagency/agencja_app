import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PublisherNullableScalarRelationFilterObjectSchema as PublisherNullableScalarRelationFilterObjectSchema } from './PublisherNullableScalarRelationFilter.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { ClientNullableScalarRelationFilterObjectSchema as ClientNullableScalarRelationFilterObjectSchema } from './ClientNullableScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { TitleNullableScalarRelationFilterObjectSchema as TitleNullableScalarRelationFilterObjectSchema } from './TitleNullableScalarRelationFilter.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { AgreementRightListRelationFilterObjectSchema as AgreementRightListRelationFilterObjectSchema } from './AgreementRightListRelationFilter.schema';
import { AgreementEventListRelationFilterObjectSchema as AgreementEventListRelationFilterObjectSchema } from './AgreementEventListRelationFilter.schema';
import { AgreementAdvanceListRelationFilterObjectSchema as AgreementAdvanceListRelationFilterObjectSchema } from './AgreementAdvanceListRelationFilter.schema';
import { AgreementRoyRateListRelationFilterObjectSchema as AgreementRoyRateListRelationFilterObjectSchema } from './AgreementRoyRateListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const agreementwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementWhereInputObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementWhereInputObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publisherId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  titleId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  agrDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  validYY: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pubTermMM: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  maxCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  minCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  copiesToOwner: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  copiesToGraal: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  currencyCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  commission: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commission' must be a Decimal",
})]).optional().nullable(),
  commissionMaterials: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionMaterials' must be a Decimal",
})]).optional().nullable(),
  estimatedCopyPrice: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'estimatedCopyPrice' must be a Decimal",
})]).optional().nullable(),
  graalShare: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'graalShare' must be a Decimal",
})]).optional().nullable(),
  graalRepresent: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  languageCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  countryId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  localTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  localIsbn: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(16)]).optional().nullable(),
  localPubDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  clientReference: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  agrDoc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  agentId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  dateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Publisher: z.union([z.lazy(() => PublisherNullableScalarRelationFilterObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  Client: z.union([z.lazy(() => ClientNullableScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  Title: z.union([z.lazy(() => TitleNullableScalarRelationFilterObjectSchema), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  Rights: z.lazy(() => AgreementRightListRelationFilterObjectSchema).optional(),
  Events: z.lazy(() => AgreementEventListRelationFilterObjectSchema).optional(),
  Advances: z.lazy(() => AgreementAdvanceListRelationFilterObjectSchema).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateListRelationFilterObjectSchema).optional()
}).strict();
export const AgreementWhereInputObjectSchema: z.ZodType<Prisma.AgreementWhereInput> = agreementwhereinputSchema as unknown as z.ZodType<Prisma.AgreementWhereInput>;
export const AgreementWhereInputObjectZodSchema = agreementwhereinputSchema;
