import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCountOutputTypeCountSendLogArgsObjectSchema as TaxResidenceCertCountOutputTypeCountSendLogArgsObjectSchema } from './TaxResidenceCertCountOutputTypeCountSendLogArgs.schema'

const makeSchema = () => z.object({
  SendLog: z.union([z.boolean(), z.lazy(() => TaxResidenceCertCountOutputTypeCountSendLogArgsObjectSchema)]).optional()
}).strict();
export const TaxResidenceCertCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TaxResidenceCertCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCountOutputTypeSelect>;
export const TaxResidenceCertCountOutputTypeSelectObjectZodSchema = makeSchema();
