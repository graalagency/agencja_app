import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema as AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema } from './AgreementUpdateOneRequiredWithoutRightsNestedInput.schema'

const makeSchema = () => z.object({
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rightFormId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  priceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royPriceTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  royAccountIntervalId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  distributionTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Agreement: z.lazy(() => AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema).optional()
}).strict();
export const AgreementRightUpdateWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateWithoutRoyRatesInput>;
export const AgreementRightUpdateWithoutRoyRatesInputObjectZodSchema = makeSchema();
