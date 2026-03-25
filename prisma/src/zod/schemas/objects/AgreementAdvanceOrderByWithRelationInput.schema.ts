import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './AgreementOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agreementId: SortOrderSchema.optional(),
  instalment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  advTermId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  advTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: SortOrderSchema.optional(),
  termDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  royaltyId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  Agreement: z.lazy(() => AgreementOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AgreementAdvanceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceOrderByWithRelationInput>;
export const AgreementAdvanceOrderByWithRelationInputObjectZodSchema = makeSchema();
