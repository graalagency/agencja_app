import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  rightFormId: z.number().int().optional().nullable(),
  priceTypeId: z.number().int().optional().nullable(),
  royPriceTypeId: z.number().int().optional().nullable(),
  royAccountIntervalId: z.number().int().optional().nullable(),
  distributionTypeId: z.number().int().optional().nullable()
}).strict();
export const AgreementRightCreateManyAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateManyAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateManyAgreementInput>;
export const AgreementRightCreateManyAgreementInputObjectZodSchema = makeSchema();
