import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './AgreementOrderByWithRelationInput.schema';
import { AgreementRightOrderByWithRelationInputObjectSchema as AgreementRightOrderByWithRelationInputObjectSchema } from './AgreementRightOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  agreementId: SortOrderSchema.optional(),
  rightId: SortOrderSchema.optional(),
  step: SortOrderSchema.optional(),
  copiesMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rate: SortOrderSchema.optional(),
  Agreement: z.lazy(() => AgreementOrderByWithRelationInputObjectSchema).optional(),
  Right: z.lazy(() => AgreementRightOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AgreementRoyRateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateOrderByWithRelationInput>;
export const AgreementRoyRateOrderByWithRelationInputObjectZodSchema = makeSchema();
