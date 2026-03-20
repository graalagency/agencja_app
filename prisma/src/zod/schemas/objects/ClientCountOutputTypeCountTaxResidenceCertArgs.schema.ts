import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './TaxResidenceCertWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountTaxResidenceCertArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountTaxResidenceCertArgsObjectZodSchema = makeSchema();
