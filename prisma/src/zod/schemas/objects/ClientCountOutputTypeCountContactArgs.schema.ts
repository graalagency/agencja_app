import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountContactArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountContactArgsObjectZodSchema = makeSchema();
