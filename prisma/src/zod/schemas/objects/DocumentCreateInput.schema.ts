import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { ClientCreateNestedOneWithoutDocumentInputObjectSchema as ClientCreateNestedOneWithoutDocumentInputObjectSchema } from './ClientCreateNestedOneWithoutDocumentInput.schema'

const makeSchema = () => z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  status: DocStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutDocumentInputObjectSchema)
}).strict();
export const DocumentCreateInputObjectSchema: z.ZodType<Prisma.DocumentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateInput>;
export const DocumentCreateInputObjectZodSchema = makeSchema();
