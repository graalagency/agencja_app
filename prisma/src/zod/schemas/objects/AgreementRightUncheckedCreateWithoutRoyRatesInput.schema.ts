import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  agreementId: z.number().int(),
  rightFormId: z.number().int().optional().nullable(),
  priceTypeId: z.number().int().optional().nullable(),
  royPriceTypeId: z.number().int().optional().nullable(),
  royAccountIntervalId: z.number().int().optional().nullable(),
  distributionTypeId: z.number().int().optional().nullable()
}).strict();
export const AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightUncheckedCreateWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUncheckedCreateWithoutRoyRatesInput>;
export const AgreementRightUncheckedCreateWithoutRoyRatesInputObjectZodSchema = makeSchema();
