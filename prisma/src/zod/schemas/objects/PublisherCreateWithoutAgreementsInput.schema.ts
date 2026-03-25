import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { PublisherCreateNestedOneWithoutChildrenInputObjectSchema as PublisherCreateNestedOneWithoutChildrenInputObjectSchema } from './PublisherCreateNestedOneWithoutChildrenInput.schema';
import { PublisherCreateNestedManyWithoutParentInputObjectSchema as PublisherCreateNestedManyWithoutParentInputObjectSchema } from './PublisherCreateNestedManyWithoutParentInput.schema';
import { PublisherContactCreateNestedManyWithoutPublisherInputObjectSchema as PublisherContactCreateNestedManyWithoutPublisherInputObjectSchema } from './PublisherContactCreateNestedManyWithoutPublisherInput.schema';
import { TaxResidenceCertCreateNestedManyWithoutPublisherInputObjectSchema as TaxResidenceCertCreateNestedManyWithoutPublisherInputObjectSchema } from './TaxResidenceCertCreateNestedManyWithoutPublisherInput.schema';
import { TaxResidenceSendCreateNestedManyWithoutPublisherInputObjectSchema as TaxResidenceSendCreateNestedManyWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateNestedManyWithoutPublisherInput.schema';
import { TitleCreateNestedManyWithoutPublisherInputObjectSchema as TitleCreateNestedManyWithoutPublisherInputObjectSchema } from './TitleCreateNestedManyWithoutPublisherInput.schema';
import { SubmissionCreateNestedManyWithoutPublisherInputObjectSchema as SubmissionCreateNestedManyWithoutPublisherInputObjectSchema } from './SubmissionCreateNestedManyWithoutPublisherInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  name: z.string(),
  abbreviation: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  fax: z.string().optional().nullable(),
  www: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  address: z.string().optional().nullable(),
  address2: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  legalForm: z.string().optional().nullable(),
  nip: z.string().optional().nullable(),
  vatId: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  jurisdiction: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  bankAccount: z.string().optional().nullable(),
  bankName: z.string().optional().nullable(),
  bankAddress: z.string().optional().nullable(),
  bankRoutingNo: z.string().optional().nullable(),
  bankAccountName: z.string().optional().nullable(),
  commission: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commission' must be a Decimal",
}).optional().nullable(),
  commissionForeign: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionForeign' must be a Decimal",
}).optional().nullable(),
  commissionMaterials: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionMaterials' must be a Decimal",
}).optional().nullable(),
  repModeId: z.number().int().optional().nullable(),
  Parent: z.lazy(() => PublisherCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  Children: z.lazy(() => PublisherCreateNestedManyWithoutParentInputObjectSchema).optional(),
  PublisherContact: z.lazy(() => PublisherContactCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  Title: z.lazy(() => TitleCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  Submissions: z.lazy(() => SubmissionCreateNestedManyWithoutPublisherInputObjectSchema).optional()
}).strict();
export const PublisherCreateWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.PublisherCreateWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateWithoutAgreementsInput>;
export const PublisherCreateWithoutAgreementsInputObjectZodSchema = makeSchema();
