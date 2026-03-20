import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './ClientContactSelect.schema';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './ClientContactInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientContactSelectObjectSchema).optional(),
  include: z.lazy(() => ClientContactIncludeObjectSchema).optional()
}).strict();
export const ClientContactArgsObjectSchema = makeSchema();
export const ClientContactArgsObjectZodSchema = makeSchema();
