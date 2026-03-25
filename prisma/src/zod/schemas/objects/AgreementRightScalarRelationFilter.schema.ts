import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './AgreementRightWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AgreementRightWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AgreementRightWhereInputObjectSchema).optional()
}).strict();
export const AgreementRightScalarRelationFilterObjectSchema: z.ZodType<Prisma.AgreementRightScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightScalarRelationFilter>;
export const AgreementRightScalarRelationFilterObjectZodSchema = makeSchema();
