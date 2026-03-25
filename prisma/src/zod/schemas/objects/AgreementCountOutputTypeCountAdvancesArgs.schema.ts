import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceWhereInputObjectSchema as AgreementAdvanceWhereInputObjectSchema } from './AgreementAdvanceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementAdvanceWhereInputObjectSchema).optional()
}).strict();
export const AgreementCountOutputTypeCountAdvancesArgsObjectSchema = makeSchema();
export const AgreementCountOutputTypeCountAdvancesArgsObjectZodSchema = makeSchema();
