import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PublisherOrderByRelationAggregateInputObjectSchema as PublisherOrderByRelationAggregateInputObjectSchema } from './PublisherOrderByRelationAggregateInput.schema';
import { PublisherContactOrderByRelationAggregateInputObjectSchema as PublisherContactOrderByRelationAggregateInputObjectSchema } from './PublisherContactOrderByRelationAggregateInput.schema';
import { TaxResidenceCertOrderByRelationAggregateInputObjectSchema as TaxResidenceCertOrderByRelationAggregateInputObjectSchema } from './TaxResidenceCertOrderByRelationAggregateInput.schema';
import { TaxResidenceSendOrderByRelationAggregateInputObjectSchema as TaxResidenceSendOrderByRelationAggregateInputObjectSchema } from './TaxResidenceSendOrderByRelationAggregateInput.schema';
import { TitleOrderByRelationAggregateInputObjectSchema as TitleOrderByRelationAggregateInputObjectSchema } from './TitleOrderByRelationAggregateInput.schema'

const publisherorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  abbreviation: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  www: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  state: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postalCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  language: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  legalForm: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  vatId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  regon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  jurisdiction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankAccount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankRoutingNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankAccountName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionForeign: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  repModeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Parent: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional(),
  Children: z.lazy(() => PublisherOrderByRelationAggregateInputObjectSchema).optional(),
  PublisherContact: z.lazy(() => PublisherContactOrderByRelationAggregateInputObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertOrderByRelationAggregateInputObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendOrderByRelationAggregateInputObjectSchema).optional(),
  Title: z.lazy(() => TitleOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PublisherOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PublisherOrderByWithRelationInput> = publisherorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.PublisherOrderByWithRelationInput>;
export const PublisherOrderByWithRelationInputObjectZodSchema = publisherorderbywithrelationinputSchema;
