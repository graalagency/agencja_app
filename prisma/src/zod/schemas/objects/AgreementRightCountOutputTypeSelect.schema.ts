import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCountOutputTypeCountRoyRatesArgsObjectSchema as AgreementRightCountOutputTypeCountRoyRatesArgsObjectSchema } from './AgreementRightCountOutputTypeCountRoyRatesArgs.schema'

const makeSchema = () => z.object({
  RoyRates: z.union([z.boolean(), z.lazy(() => AgreementRightCountOutputTypeCountRoyRatesArgsObjectSchema)]).optional()
}).strict();
export const AgreementRightCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AgreementRightCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCountOutputTypeSelect>;
export const AgreementRightCountOutputTypeSelectObjectZodSchema = makeSchema();
