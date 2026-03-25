import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientOrderByRelationAggregateInputObjectSchema as ClientOrderByRelationAggregateInputObjectSchema } from './ClientOrderByRelationAggregateInput.schema';
import { AuthorOrderByRelationAggregateInputObjectSchema as AuthorOrderByRelationAggregateInputObjectSchema } from './AuthorOrderByRelationAggregateInput.schema';
import { ClientContactOrderByRelationAggregateInputObjectSchema as ClientContactOrderByRelationAggregateInputObjectSchema } from './ClientContactOrderByRelationAggregateInput.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema as InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema';
import { TaxResidenceCertOrderByRelationAggregateInputObjectSchema as TaxResidenceCertOrderByRelationAggregateInputObjectSchema } from './TaxResidenceCertOrderByRelationAggregateInput.schema';
import { TaxResidenceSendOrderByRelationAggregateInputObjectSchema as TaxResidenceSendOrderByRelationAggregateInputObjectSchema } from './TaxResidenceSendOrderByRelationAggregateInput.schema';
import { TitleOrderByRelationAggregateInputObjectSchema as TitleOrderByRelationAggregateInputObjectSchema } from './TitleOrderByRelationAggregateInput.schema';
import { AgreementOrderByRelationAggregateInputObjectSchema as AgreementOrderByRelationAggregateInputObjectSchema } from './AgreementOrderByRelationAggregateInput.schema'

const clientorderbywithrelationinputSchema = z.object({
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
  Parent: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  Children: z.lazy(() => ClientOrderByRelationAggregateInputObjectSchema).optional(),
  Author: z.lazy(() => AuthorOrderByRelationAggregateInputObjectSchema).optional(),
  ClientContact: z.lazy(() => ClientContactOrderByRelationAggregateInputObjectSchema).optional(),
  Invoice: z.lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema).optional(),
  TaxResidenceCert: z.lazy(() => TaxResidenceCertOrderByRelationAggregateInputObjectSchema).optional(),
  TaxResidenceSend: z.lazy(() => TaxResidenceSendOrderByRelationAggregateInputObjectSchema).optional(),
  Title: z.lazy(() => TitleOrderByRelationAggregateInputObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClientOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = clientorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.ClientOrderByWithRelationInput>;
export const ClientOrderByWithRelationInputObjectZodSchema = clientorderbywithrelationinputSchema;
