import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional()
}).strict();
export const AgreementRightWhereUniqueInputObjectSchema: z.ZodType<Prisma.AgreementRightWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightWhereUniqueInput>;
export const AgreementRightWhereUniqueInputObjectZodSchema = makeSchema();
