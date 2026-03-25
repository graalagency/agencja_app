import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereInputObjectSchema as AgreementRoyRateWhereInputObjectSchema } from './AgreementRoyRateWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgreementRoyRateWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgreementRoyRateWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgreementRoyRateWhereInputObjectSchema).optional()
}).strict();
export const AgreementRoyRateListRelationFilterObjectSchema: z.ZodType<Prisma.AgreementRoyRateListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateListRelationFilter>;
export const AgreementRoyRateListRelationFilterObjectZodSchema = makeSchema();
