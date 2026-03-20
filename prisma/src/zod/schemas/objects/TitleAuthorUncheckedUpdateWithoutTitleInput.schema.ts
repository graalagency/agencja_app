import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  authorId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TitleAuthorUncheckedUpdateWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorUncheckedUpdateWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUncheckedUpdateWithoutTitleInput>;
export const TitleAuthorUncheckedUpdateWithoutTitleInputObjectZodSchema = makeSchema();
