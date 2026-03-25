import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  rightId: z.number().int(),
  step: z.number().int()
}).strict();
export const AgreementRoyRateRightIdStepCompoundUniqueInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateRightIdStepCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateRightIdStepCompoundUniqueInput>;
export const AgreementRoyRateRightIdStepCompoundUniqueInputObjectZodSchema = makeSchema();
