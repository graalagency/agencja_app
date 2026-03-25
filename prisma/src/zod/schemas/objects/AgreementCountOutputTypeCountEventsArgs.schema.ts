import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './AgreementEventWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementEventWhereInputObjectSchema).optional()
}).strict();
export const AgreementCountOutputTypeCountEventsArgsObjectSchema = makeSchema();
export const AgreementCountOutputTypeCountEventsArgsObjectZodSchema = makeSchema();
