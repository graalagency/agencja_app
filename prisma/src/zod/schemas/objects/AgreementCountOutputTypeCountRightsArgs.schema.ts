import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './AgreementRightWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightWhereInputObjectSchema).optional()
}).strict();
export const AgreementCountOutputTypeCountRightsArgsObjectSchema = makeSchema();
export const AgreementCountOutputTypeCountRightsArgsObjectZodSchema = makeSchema();
