import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: SortOrderSchema.optional(),
  publisherId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  titleId: SortOrderSchema.optional(),
  agrDate: SortOrderSchema.optional(),
  validYY: SortOrderSchema.optional(),
  pubTermMM: SortOrderSchema.optional(),
  maxCopies: SortOrderSchema.optional(),
  minCopies: SortOrderSchema.optional(),
  copiesToOwner: SortOrderSchema.optional(),
  copiesToGraal: SortOrderSchema.optional(),
  currencyCode: SortOrderSchema.optional(),
  commission: SortOrderSchema.optional(),
  commissionMaterials: SortOrderSchema.optional(),
  estimatedCopyPrice: SortOrderSchema.optional(),
  graalShare: SortOrderSchema.optional(),
  graalRepresent: SortOrderSchema.optional(),
  languageCode: SortOrderSchema.optional(),
  countryId: SortOrderSchema.optional(),
  localTitle: SortOrderSchema.optional(),
  localIsbn: SortOrderSchema.optional(),
  localPubDate: SortOrderSchema.optional(),
  clientReference: SortOrderSchema.optional(),
  agrDoc: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  remarks: SortOrderSchema.optional(),
  agentId: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  userMod: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AgreementMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementMinOrderByAggregateInput>;
export const AgreementMinOrderByAggregateInputObjectZodSchema = makeSchema();
