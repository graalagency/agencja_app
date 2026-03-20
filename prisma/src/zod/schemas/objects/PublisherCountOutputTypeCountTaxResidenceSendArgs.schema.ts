import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereInputObjectSchema as TaxResidenceSendWhereInputObjectSchema } from './TaxResidenceSendWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereInputObjectSchema).optional()
}).strict();
export const PublisherCountOutputTypeCountTaxResidenceSendArgsObjectSchema = makeSchema();
export const PublisherCountOutputTypeCountTaxResidenceSendArgsObjectZodSchema = makeSchema();
