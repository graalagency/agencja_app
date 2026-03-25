import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementScalarRelationFilterObjectSchema: z.ZodType<Prisma.AgreementScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementScalarRelationFilter>;
export const AgreementScalarRelationFilterObjectZodSchema = makeSchema();
