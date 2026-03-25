import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema'

const makeSchema = () => z.object({
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional()
}).strict();
export const AgreementEventIncludeObjectSchema: z.ZodType<Prisma.AgreementEventInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventInclude>;
export const AgreementEventIncludeObjectZodSchema = makeSchema();
