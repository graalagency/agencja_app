import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBytesFieldUpdateOperationsInputObjectSchema as NullableBytesFieldUpdateOperationsInputObjectSchema } from './NullableBytesFieldUpdateOperationsInput.schema';
import { ClientUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema as ClientUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema } from './ClientUpdateOneWithoutTaxResidenceCertNestedInput.schema';
import { PublisherUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema as PublisherUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema } from './PublisherUpdateOneWithoutTaxResidenceCertNestedInput.schema'

const makeSchema = () => z.object({
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  validDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  requestDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  receiveDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  hasCert: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fileData: z.union([z.instanceof(Uint8Array), z.lazy(() => NullableBytesFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fileName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertUpdateWithoutSendLogInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateWithoutSendLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateWithoutSendLogInput>;
export const TaxResidenceCertUpdateWithoutSendLogInputObjectZodSchema = makeSchema();
