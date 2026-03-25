import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateNestedOneWithoutRightsInputObjectSchema as AgreementCreateNestedOneWithoutRightsInputObjectSchema } from './AgreementCreateNestedOneWithoutRightsInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  rightFormId: z.number().int().optional().nullable(),
  priceTypeId: z.number().int().optional().nullable(),
  royPriceTypeId: z.number().int().optional().nullable(),
  royAccountIntervalId: z.number().int().optional().nullable(),
  distributionTypeId: z.number().int().optional().nullable(),
  Agreement: z.lazy(() => AgreementCreateNestedOneWithoutRightsInputObjectSchema)
}).strict();
export const AgreementRightCreateWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateWithoutRoyRatesInput>;
export const AgreementRightCreateWithoutRoyRatesInputObjectZodSchema = makeSchema();
