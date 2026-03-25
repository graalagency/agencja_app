import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { AgreementRoyRateUncheckedUpdateManyWithoutRightNestedInputObjectSchema as AgreementRoyRateUncheckedUpdateManyWithoutRightNestedInputObjectSchema } from './AgreementRoyRateUncheckedUpdateManyWithoutRightNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  agreementId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  rightFormId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  priceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royPriceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royAccountIntervalId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  distributionTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyRates: z.lazy(() => AgreementRoyRateUncheckedUpdateManyWithoutRightNestedInputObjectSchema).optional()
}).strict();
export const AgreementRightUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AgreementRightUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUncheckedUpdateInput>;
export const AgreementRightUncheckedUpdateInputObjectZodSchema = makeSchema();
