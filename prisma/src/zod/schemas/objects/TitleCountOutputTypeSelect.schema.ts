import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema as TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema } from './TitleCountOutputTypeCountTitleAuthorsArgs.schema'

const makeSchema = () => z.object({
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema)]).optional()
}).strict();
export const TitleCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TitleCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TitleCountOutputTypeSelect>;
export const TitleCountOutputTypeSelectObjectZodSchema = makeSchema();
