import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema as TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema } from './TitleUpdateOneRequiredWithoutTitleAuthorsNestedInput.schema';
import { AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema as AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInput.schema'

const makeSchema = () => z.object({
  isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Title: z.lazy(() => TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema).optional(),
  Author: z.lazy(() => AuthorUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema).optional()
}).strict();
export const TitleAuthorUpdateInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateInput>;
export const TitleAuthorUpdateInputObjectZodSchema = makeSchema();
