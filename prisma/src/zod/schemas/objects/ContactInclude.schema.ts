import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const ContactIncludeObjectSchema: z.ZodType<Prisma.ContactInclude> = makeSchema() as unknown as z.ZodType<Prisma.ContactInclude>;
export const ContactIncludeObjectZodSchema = makeSchema();
