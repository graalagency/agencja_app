import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactArgsObjectSchema as ContactArgsObjectSchema } from './ContactArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  Contact: z.union([z.boolean(), z.lazy(() => ContactArgsObjectSchema)]).optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const ClientContactIncludeObjectSchema: z.ZodType<Prisma.ClientContactInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactInclude>;
export const ClientContactIncludeObjectZodSchema = makeSchema();
