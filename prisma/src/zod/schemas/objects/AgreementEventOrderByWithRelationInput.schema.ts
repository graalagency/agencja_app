import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './AgreementOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agreementId: SortOrderSchema.optional(),
  eventCode: SortOrderSchema.optional(),
  eventDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  noOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  Agreement: z.lazy(() => AgreementOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AgreementEventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgreementEventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventOrderByWithRelationInput>;
export const AgreementEventOrderByWithRelationInputObjectZodSchema = makeSchema();
