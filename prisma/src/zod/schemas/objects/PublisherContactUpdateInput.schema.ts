import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContactUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema as ContactUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema } from './ContactUpdateOneRequiredWithoutPublisherContactNestedInput.schema';
import { PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema as PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema } from './PublisherUpdateOneRequiredWithoutPublisherContactNestedInput.schema'

const makeSchema = () => z.object({
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Contact: z.lazy(() => ContactUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema).optional()
}).strict();
export const PublisherContactUpdateInputObjectSchema: z.ZodType<Prisma.PublisherContactUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpdateInput>;
export const PublisherContactUpdateInputObjectZodSchema = makeSchema();
