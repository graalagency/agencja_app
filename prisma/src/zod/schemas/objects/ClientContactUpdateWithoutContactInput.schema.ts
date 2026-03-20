import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientUpdateOneRequiredWithoutClientContactNestedInputObjectSchema as ClientUpdateOneRequiredWithoutClientContactNestedInputObjectSchema } from './ClientUpdateOneRequiredWithoutClientContactNestedInput.schema'

const makeSchema = () => z.object({
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Client: z.lazy(() => ClientUpdateOneRequiredWithoutClientContactNestedInputObjectSchema).optional()
}).strict();
export const ClientContactUpdateWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateWithoutContactInput>;
export const ClientContactUpdateWithoutContactInputObjectZodSchema = makeSchema();
