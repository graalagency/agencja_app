import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './TitleAuthorWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereInputObjectSchema).optional()
}).strict();
export const TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema = makeSchema();
export const TitleCountOutputTypeCountTitleAuthorsArgsObjectZodSchema = makeSchema();
