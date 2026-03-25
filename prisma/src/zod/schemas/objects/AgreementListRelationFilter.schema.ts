import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementListRelationFilterObjectSchema: z.ZodType<Prisma.AgreementListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementListRelationFilter>;
export const AgreementListRelationFilterObjectZodSchema = makeSchema();
