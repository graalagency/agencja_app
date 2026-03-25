import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './AgreementRightWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgreementRightWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgreementRightWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgreementRightWhereInputObjectSchema).optional()
}).strict();
export const AgreementRightListRelationFilterObjectSchema: z.ZodType<Prisma.AgreementRightListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightListRelationFilter>;
export const AgreementRightListRelationFilterObjectZodSchema = makeSchema();
