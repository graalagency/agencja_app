import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema as AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './AuthorUncheckedCreateNestedManyWithoutClientInput.schema';
import { ClientContactUncheckedCreateNestedManyWithoutClientInputObjectSchema as ClientContactUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './ClientContactUncheckedCreateNestedManyWithoutClientInput.schema';
import { DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema as DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutClientInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema';
import { TaxResidenceCertUncheckedCreateNestedManyWithoutClientInputObjectSchema as TaxResidenceCertUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedCreateNestedManyWithoutClientInput.schema';
import { TaxResidenceSendUncheckedCreateNestedManyWithoutClientInputObjectSchema as TaxResidenceSendUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedCreateNestedManyWithoutClientInput.schema';
import { TitleUncheckedCreateNestedManyWithoutClientInputObjectSchema as TitleUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './TitleUncheckedCreateNestedManyWithoutClientInput.schema'

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
  Author: z.lazy(() => AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  ClientContact: z.lazy(() => ClientContactUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Title: z.lazy(() => TitleUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutChildrenInput>;
export const ClientUncheckedCreateWithoutChildrenInputObjectZodSchema = makeSchema();
