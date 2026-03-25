import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereInputObjectSchema as AgreementRoyRateWhereInputObjectSchema } from './AgreementRoyRateWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereInputObjectSchema).optional()
}).strict();
export const AgreementRightCountOutputTypeCountRoyRatesArgsObjectSchema = makeSchema();
export const AgreementRightCountOutputTypeCountRoyRatesArgsObjectZodSchema = makeSchema();
