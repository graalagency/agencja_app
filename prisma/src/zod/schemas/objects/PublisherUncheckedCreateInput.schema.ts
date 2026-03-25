import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { PublisherUncheckedCreateNestedManyWithoutParentInputObjectSchema as PublisherUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './PublisherUncheckedCreateNestedManyWithoutParentInput.schema';
import { PublisherContactUncheckedCreateNestedManyWithoutPublisherInputObjectSchema as PublisherContactUncheckedCreateNestedManyWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedCreateNestedManyWithoutPublisherInput.schema';
import { TaxResidenceCertUncheckedCreateNestedManyWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedCreateNestedManyWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedCreateNestedManyWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedCreateNestedManyWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedCreateNestedManyWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedCreateNestedManyWithoutPublisherInput.schema';
import { TitleUncheckedCreateNestedManyWithoutPublisherInputObjectSchema as TitleUncheckedCreateNestedManyWithoutPublisherInputObjectSchema } from './TitleUncheckedCreateNestedManyWithoutPublisherInput.schema';
import { AgreementUncheckedCreateNestedManyWithoutPublisherInputObjectSchema as AgreementUncheckedCreateNestedManyWithoutPublisherInputObjectSchema } from './AgreementUncheckedCreateNestedManyWithoutPublisherInput.schema';
import { SubmissionUncheckedCreateNestedManyWithoutPublisherInputObjectSchema as SubmissionUncheckedCreateNestedManyWithoutPublisherInputObjectSchema } from './SubmissionUncheckedCreateNestedManyWithoutPublisherInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
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
  parentId: z.number().int().optional().nullable(),
  Children: z.lazy(() => PublisherUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  PublisherContact: z.lazy(() => PublisherContactUncheckedCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertUncheckedCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendUncheckedCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  Title: z.lazy(() => TitleUncheckedCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementUncheckedCreateNestedManyWithoutPublisherInputObjectSchema).optional(),
  Submissions: z.lazy(() => SubmissionUncheckedCreateNestedManyWithoutPublisherInputObjectSchema).optional()
}).strict();
export const PublisherUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PublisherUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUncheckedCreateInput>;
export const PublisherUncheckedCreateInputObjectZodSchema = makeSchema();
