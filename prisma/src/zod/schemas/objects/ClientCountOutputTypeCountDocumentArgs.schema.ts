import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentWhereInputObjectSchema as DocumentWhereInputObjectSchema } from './DocumentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DocumentWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountDocumentArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountDocumentArgsObjectZodSchema = makeSchema();
