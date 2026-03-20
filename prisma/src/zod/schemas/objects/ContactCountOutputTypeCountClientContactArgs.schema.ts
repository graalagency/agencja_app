import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './ClientContactWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereInputObjectSchema).optional()
}).strict();
export const ContactCountOutputTypeCountClientContactArgsObjectSchema = makeSchema();
export const ContactCountOutputTypeCountClientContactArgsObjectZodSchema = makeSchema();
