import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './AgreementEventWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgreementEventWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgreementEventWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgreementEventWhereInputObjectSchema).optional()
}).strict();
export const AgreementEventListRelationFilterObjectSchema: z.ZodType<Prisma.AgreementEventListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventListRelationFilter>;
export const AgreementEventListRelationFilterObjectZodSchema = makeSchema();
