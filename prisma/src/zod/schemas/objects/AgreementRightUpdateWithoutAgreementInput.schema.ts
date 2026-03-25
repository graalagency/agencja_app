import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema as AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema } from './AgreementRoyRateUpdateManyWithoutRightNestedInput.schema'

const makeSchema = () => z.object({
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rightFormId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  priceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royPriceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royAccountIntervalId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  distributionTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyRates: z.lazy(() => AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema).optional()
}).strict();
export const AgreementRightUpdateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateWithoutAgreementInput>;
export const AgreementRightUpdateWithoutAgreementInputObjectZodSchema = makeSchema();
