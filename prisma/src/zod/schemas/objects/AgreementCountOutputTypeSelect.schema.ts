import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCountOutputTypeCountRightsArgsObjectSchema as AgreementCountOutputTypeCountRightsArgsObjectSchema } from './AgreementCountOutputTypeCountRightsArgs.schema';
import { AgreementCountOutputTypeCountEventsArgsObjectSchema as AgreementCountOutputTypeCountEventsArgsObjectSchema } from './AgreementCountOutputTypeCountEventsArgs.schema';
import { AgreementCountOutputTypeCountAdvancesArgsObjectSchema as AgreementCountOutputTypeCountAdvancesArgsObjectSchema } from './AgreementCountOutputTypeCountAdvancesArgs.schema';
import { AgreementCountOutputTypeCountRoyRatesArgsObjectSchema as AgreementCountOutputTypeCountRoyRatesArgsObjectSchema } from './AgreementCountOutputTypeCountRoyRatesArgs.schema'

const makeSchema = () => z.object({
  Rights: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeCountRightsArgsObjectSchema)]).optional(),
  Events: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeCountEventsArgsObjectSchema)]).optional(),
  Advances: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeCountAdvancesArgsObjectSchema)]).optional(),
  RoyRates: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeCountRoyRatesArgsObjectSchema)]).optional()
}).strict();
export const AgreementCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AgreementCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCountOutputTypeSelect>;
export const AgreementCountOutputTypeSelectObjectZodSchema = makeSchema();
