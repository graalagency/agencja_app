import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AuthorUncheckedUpdateManyWithoutClientNestedInputObjectSchema as AuthorUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './AuthorUncheckedUpdateManyWithoutClientNestedInput.schema';
import { ContactUncheckedUpdateManyWithoutClientNestedInputObjectSchema as ContactUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './ContactUncheckedUpdateManyWithoutClientNestedInput.schema';
import { DocumentUncheckedUpdateManyWithoutClientNestedInputObjectSchema as DocumentUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './DocumentUncheckedUpdateManyWithoutClientNestedInput.schema';
import { InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema as InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankAccount: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  legalForm: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nip: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  postalCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  regon: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Author: z.lazy(() => AuthorUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Contact: z.lazy(() => ContactUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ClientUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedUpdateInput>;
export const ClientUncheckedUpdateInputObjectZodSchema = makeSchema();
