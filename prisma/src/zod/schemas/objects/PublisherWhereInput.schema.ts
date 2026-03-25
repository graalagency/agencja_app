import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { PublisherNullableScalarRelationFilterObjectSchema as PublisherNullableScalarRelationFilterObjectSchema } from './PublisherNullableScalarRelationFilter.schema';
import { PublisherListRelationFilterObjectSchema as PublisherListRelationFilterObjectSchema } from './PublisherListRelationFilter.schema';
import { PublisherContactListRelationFilterObjectSchema as PublisherContactListRelationFilterObjectSchema } from './PublisherContactListRelationFilter.schema';
import { TaxResidenceCertListRelationFilterObjectSchema as TaxResidenceCertListRelationFilterObjectSchema } from './TaxResidenceCertListRelationFilter.schema';
import { TaxResidenceSendListRelationFilterObjectSchema as TaxResidenceSendListRelationFilterObjectSchema } from './TaxResidenceSendListRelationFilter.schema';
import { TitleListRelationFilterObjectSchema as TitleListRelationFilterObjectSchema } from './TitleListRelationFilter.schema';
import { AgreementListRelationFilterObjectSchema as AgreementListRelationFilterObjectSchema } from './AgreementListRelationFilter.schema';
import { SubmissionListRelationFilterObjectSchema as SubmissionListRelationFilterObjectSchema } from './SubmissionListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const publisherwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PublisherWhereInputObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublisherWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublisherWhereInputObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  abbreviation: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  fax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  www: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  state: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  postalCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  language: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  legalForm: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  nip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  vatId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  regon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  jurisdiction: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankAccount: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankRoutingNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankAccountName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commission: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commission' must be a Decimal",
})]).optional().nullable(),
  commissionForeign: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionForeign' must be a Decimal",
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
  repModeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  parentId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Parent: z.union([z.lazy(() => PublisherNullableScalarRelationFilterObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  Children: z.lazy(() => PublisherListRelationFilterObjectSchema).optional(),
  PublisherContact: z.lazy(() => PublisherContactListRelationFilterObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertListRelationFilterObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendListRelationFilterObjectSchema).optional(),
  Title: z.lazy(() => TitleListRelationFilterObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementListRelationFilterObjectSchema).optional(),
  Submissions: z.lazy(() => SubmissionListRelationFilterObjectSchema).optional()
}).strict();
export const PublisherWhereInputObjectSchema: z.ZodType<Prisma.PublisherWhereInput> = publisherwhereinputSchema as unknown as z.ZodType<Prisma.PublisherWhereInput>;
export const PublisherWhereInputObjectZodSchema = publisherwhereinputSchema;
