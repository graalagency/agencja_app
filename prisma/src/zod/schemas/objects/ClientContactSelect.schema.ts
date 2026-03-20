import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactArgsObjectSchema as ContactArgsObjectSchema } from './ContactArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Contact: z.union([z.boolean(), z.lazy(() => ContactArgsObjectSchema)]).optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const ClientContactSelectObjectSchema: z.ZodType<Prisma.ClientContactSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactSelect>;
export const ClientContactSelectObjectZodSchema = makeSchema();
