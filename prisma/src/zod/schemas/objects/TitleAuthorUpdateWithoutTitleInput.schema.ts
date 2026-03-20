import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema as AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInput.schema'

const makeSchema = () => z.object({
  isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Author: z.lazy(() => AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema).optional()
}).strict();
export const TitleAuthorUpdateWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateWithoutTitleInput>;
export const TitleAuthorUpdateWithoutTitleInputObjectZodSchema = makeSchema();
