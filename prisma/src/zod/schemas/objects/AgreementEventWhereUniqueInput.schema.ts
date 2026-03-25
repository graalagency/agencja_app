import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const AgreementEventWhereUniqueInputObjectSchema: z.ZodType<Prisma.AgreementEventWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventWhereUniqueInput>;
export const AgreementEventWhereUniqueInputObjectZodSchema = makeSchema();
