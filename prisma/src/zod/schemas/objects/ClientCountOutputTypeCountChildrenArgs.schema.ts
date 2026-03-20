import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountChildrenArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountChildrenArgsObjectZodSchema = makeSchema();
