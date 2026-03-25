import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema';
import { AgreementRightArgsObjectSchema as AgreementRightArgsObjectSchema } from './AgreementRightArgs.schema'

const makeSchema = () => z.object({
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional(),
  Right: z.union([z.boolean(), z.lazy(() => AgreementRightArgsObjectSchema)]).optional()
}).strict();
export const AgreementRoyRateIncludeObjectSchema: z.ZodType<Prisma.AgreementRoyRateInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateInclude>;
export const AgreementRoyRateIncludeObjectZodSchema = makeSchema();
