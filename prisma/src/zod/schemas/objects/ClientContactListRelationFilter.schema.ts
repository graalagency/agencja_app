import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './ClientContactWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ClientContactWhereInputObjectSchema).optional(),
  some: z.lazy(() => ClientContactWhereInputObjectSchema).optional(),
  none: z.lazy(() => ClientContactWhereInputObjectSchema).optional()
}).strict();
export const ClientContactListRelationFilterObjectSchema: z.ZodType<Prisma.ClientContactListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactListRelationFilter>;
export const ClientContactListRelationFilterObjectZodSchema = makeSchema();
