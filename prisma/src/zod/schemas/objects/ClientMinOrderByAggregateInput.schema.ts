import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  abbreviation: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  fax: SortOrderSchema.optional(),
  www: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  address2: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  language: SortOrderSchema.optional(),
  legalForm: SortOrderSchema.optional(),
  nip: SortOrderSchema.optional(),
  vatId: SortOrderSchema.optional(),
  regon: SortOrderSchema.optional(),
  jurisdiction: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  bankAccount: SortOrderSchema.optional(),
  bankName: SortOrderSchema.optional(),
  bankAddress: SortOrderSchema.optional(),
  bankRoutingNo: SortOrderSchema.optional(),
  bankAccountName: SortOrderSchema.optional(),
  commission: SortOrderSchema.optional(),
  commissionForeign: SortOrderSchema.optional(),
  commissionMaterials: SortOrderSchema.optional(),
  repModeId: SortOrderSchema.optional(),
  parentId: SortOrderSchema.optional()
}).strict();
export const ClientMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientMinOrderByAggregateInput>;
export const ClientMinOrderByAggregateInputObjectZodSchema = makeSchema();
