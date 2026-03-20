import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContactUpdateOneRequiredWithoutClientContactNestedInputObjectSchema as ContactUpdateOneRequiredWithoutClientContactNestedInputObjectSchema } from './ContactUpdateOneRequiredWithoutClientContactNestedInput.schema'

const makeSchema = () => z.object({
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Contact: z.lazy(() => ContactUpdateOneRequiredWithoutClientContactNestedInputObjectSchema).optional()
}).strict();
export const ClientContactUpdateWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateWithoutClientInput>;
export const ClientContactUpdateWithoutClientInputObjectZodSchema = makeSchema();
