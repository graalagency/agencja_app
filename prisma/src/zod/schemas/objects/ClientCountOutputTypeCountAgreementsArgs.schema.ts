import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountAgreementsArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountAgreementsArgsObjectZodSchema = makeSchema();
