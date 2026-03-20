import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TitleAuthorUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyMutationInput>;
export const TitleAuthorUpdateManyMutationInputObjectZodSchema = makeSchema();
