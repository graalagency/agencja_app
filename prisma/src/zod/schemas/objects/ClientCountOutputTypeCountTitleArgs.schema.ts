import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountTitleArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountTitleArgsObjectZodSchema = makeSchema();
