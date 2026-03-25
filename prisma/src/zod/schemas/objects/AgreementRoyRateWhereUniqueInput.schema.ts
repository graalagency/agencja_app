import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateRightIdStepCompoundUniqueInputObjectSchema as AgreementRoyRateRightIdStepCompoundUniqueInputObjectSchema } from './AgreementRoyRateRightIdStepCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  rightId_step: z.lazy(() => AgreementRoyRateRightIdStepCompoundUniqueInputObjectSchema).optional()
}).strict();
export const AgreementRoyRateWhereUniqueInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateWhereUniqueInput>;
export const AgreementRoyRateWhereUniqueInputObjectZodSchema = makeSchema();
