import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema as PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema } from './PublisherUpdateOneRequiredWithoutPublisherContactNestedInput.schema'

const makeSchema = () => z.object({
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Publisher: z.lazy(() => PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema).optional()
}).strict();
export const PublisherContactUpdateWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactUpdateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpdateWithoutContactInput>;
export const PublisherContactUpdateWithoutContactInputObjectZodSchema = makeSchema();
