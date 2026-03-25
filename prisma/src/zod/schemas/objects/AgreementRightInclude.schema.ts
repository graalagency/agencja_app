import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema';
import { AgreementRoyRateFindManySchema as AgreementRoyRateFindManySchema } from '../findManyAgreementRoyRate.schema';
import { AgreementRightCountOutputTypeArgsObjectSchema as AgreementRightCountOutputTypeArgsObjectSchema } from './AgreementRightCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional(),
  RoyRates: z.union([z.boolean(), z.lazy(() => AgreementRoyRateFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgreementRightCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgreementRightIncludeObjectSchema: z.ZodType<Prisma.AgreementRightInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightInclude>;
export const AgreementRightIncludeObjectZodSchema = makeSchema();
