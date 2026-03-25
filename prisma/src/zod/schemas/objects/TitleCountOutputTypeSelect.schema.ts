import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema as TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema } from './TitleCountOutputTypeCountTitleAuthorsArgs.schema';
import { TitleCountOutputTypeCountAgreementsArgsObjectSchema as TitleCountOutputTypeCountAgreementsArgsObjectSchema } from './TitleCountOutputTypeCountAgreementsArgs.schema';
import { TitleCountOutputTypeCountSubmissionsArgsObjectSchema as TitleCountOutputTypeCountSubmissionsArgsObjectSchema } from './TitleCountOutputTypeCountSubmissionsArgs.schema'

const makeSchema = () => z.object({
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeCountTitleAuthorsArgsObjectSchema)]).optional(),
  Agreements: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeCountAgreementsArgsObjectSchema)]).optional(),
  Submissions: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeCountSubmissionsArgsObjectSchema)]).optional()
}).strict();
export const TitleCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TitleCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TitleCountOutputTypeSelect>;
export const TitleCountOutputTypeSelectObjectZodSchema = makeSchema();
