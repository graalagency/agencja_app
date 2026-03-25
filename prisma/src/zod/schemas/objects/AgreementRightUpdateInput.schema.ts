import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema as AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema } from './AgreementUpdateOneRequiredWithoutRightsNestedInput.schema';
import { AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema as AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema } from './AgreementRoyRateUpdateManyWithoutRightNestedInput.schema'

const makeSchema = () => z.object({
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rightFormId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  priceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royPriceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royAccountIntervalId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  distributionTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Agreement: z.lazy(() => AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateUpdateManyWithoutRightNestedInputObjectSchema).optional()
}).strict();
export const AgreementRightUpdateInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateInput>;
export const AgreementRightUpdateInputObjectZodSchema = makeSchema();
