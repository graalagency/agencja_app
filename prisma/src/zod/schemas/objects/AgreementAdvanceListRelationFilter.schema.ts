import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceWhereInputObjectSchema as AgreementAdvanceWhereInputObjectSchema } from './AgreementAdvanceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgreementAdvanceWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgreementAdvanceWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgreementAdvanceWhereInputObjectSchema).optional()
}).strict();
export const AgreementAdvanceListRelationFilterObjectSchema: z.ZodType<Prisma.AgreementAdvanceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceListRelationFilter>;
export const AgreementAdvanceListRelationFilterObjectZodSchema = makeSchema();
