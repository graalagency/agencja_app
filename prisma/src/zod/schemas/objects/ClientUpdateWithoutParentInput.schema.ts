import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { ClientUpdateManyWithoutParentNestedInputObjectSchema as ClientUpdateManyWithoutParentNestedInputObjectSchema } from './ClientUpdateManyWithoutParentNestedInput.schema';
import { AuthorUpdateManyWithoutClientNestedInputObjectSchema as AuthorUpdateManyWithoutClientNestedInputObjectSchema } from './AuthorUpdateManyWithoutClientNestedInput.schema';
import { ClientContactUpdateManyWithoutClientNestedInputObjectSchema as ClientContactUpdateManyWithoutClientNestedInputObjectSchema } from './ClientContactUpdateManyWithoutClientNestedInput.schema';
import { DocumentUpdateManyWithoutClientNestedInputObjectSchema as DocumentUpdateManyWithoutClientNestedInputObjectSchema } from './DocumentUpdateManyWithoutClientNestedInput.schema';
import { InvoiceUpdateManyWithoutClientNestedInputObjectSchema as InvoiceUpdateManyWithoutClientNestedInputObjectSchema } from './InvoiceUpdateManyWithoutClientNestedInput.schema';
import { TaxResidenceCertUpdateManyWithoutClientNestedInputObjectSchema as TaxResidenceCertUpdateManyWithoutClientNestedInputObjectSchema } from './TaxResidenceCertUpdateManyWithoutClientNestedInput.schema';
import { TaxResidenceSendUpdateManyWithoutClientNestedInputObjectSchema as TaxResidenceSendUpdateManyWithoutClientNestedInputObjectSchema } from './TaxResidenceSendUpdateManyWithoutClientNestedInput.schema';
import { TitleUpdateManyWithoutClientNestedInputObjectSchema as TitleUpdateManyWithoutClientNestedInputObjectSchema } from './TitleUpdateManyWithoutClientNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  abbreviation: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fax: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  www: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  postalCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  language: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  legalForm: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nip: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  vatId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  regon: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  jurisdiction: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankAccount: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankRoutingNo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankAccountName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  commission: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commission' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  commissionForeign: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionForeign' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  commissionMaterials: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionMaterials' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  repModeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Children: z.lazy(() => ClientUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  Author: z.lazy(() => AuthorUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  ClientContact: z.lazy(() => ClientContactUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Document: z.lazy(() => DocumentUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Invoice: z.lazy(() => InvoiceUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Title: z.lazy(() => TitleUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUpdateWithoutParentInputObjectSchema: z.ZodType<Prisma.ClientUpdateWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateWithoutParentInput>;
export const ClientUpdateWithoutParentInputObjectZodSchema = makeSchema();
