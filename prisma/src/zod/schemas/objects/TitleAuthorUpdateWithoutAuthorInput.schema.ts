import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema as TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema } from './TitleUpdateOneRequiredWithoutTitleAuthorsNestedInput.schema'

const makeSchema = () => z.object({
  isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Title: z.lazy(() => TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema).optional()
}).strict();
export const TitleAuthorUpdateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateWithoutAuthorInput>;
export const TitleAuthorUpdateWithoutAuthorInputObjectZodSchema = makeSchema();
