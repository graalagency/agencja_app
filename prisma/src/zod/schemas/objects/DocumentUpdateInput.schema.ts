import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { EnumDocStatusFieldUpdateOperationsInputObjectSchema as EnumDocStatusFieldUpdateOperationsInputObjectSchema } from './EnumDocStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientUpdateOneRequiredWithoutDocumentNestedInputObjectSchema as ClientUpdateOneRequiredWithoutDocumentNestedInputObjectSchema } from './ClientUpdateOneRequiredWithoutDocumentNestedInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([DocStatusSchema, z.lazy(() => EnumDocStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Client: z.lazy(() => ClientUpdateOneRequiredWithoutDocumentNestedInputObjectSchema).optional()
}).strict();
export const DocumentUpdateInputObjectSchema: z.ZodType<Prisma.DocumentUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentUpdateInput>;
export const DocumentUpdateInputObjectZodSchema = makeSchema();
