import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInputObjectSchema as TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInputObjectSchema } from './TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInput.schema';
import { ClientUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema as ClientUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema } from './ClientUpdateOneWithoutTaxResidenceSendNestedInput.schema';
import { PublisherUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema as PublisherUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema } from './PublisherUpdateOneWithoutTaxResidenceSendNestedInput.schema'

const makeSchema = () => z.object({
  dateSend: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sendOrig: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  sendCopy: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Cert: z.lazy(() => TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInputObjectSchema).optional(),
  Client: z.lazy(() => ClientUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendUpdateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateInput>;
export const TaxResidenceSendUpdateInputObjectZodSchema = makeSchema();
