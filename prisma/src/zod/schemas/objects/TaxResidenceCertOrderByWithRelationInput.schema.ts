import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './PublisherOrderByWithRelationInput.schema';
import { TaxResidenceSendOrderByRelationAggregateInputObjectSchema as TaxResidenceSendOrderByRelationAggregateInputObjectSchema } from './TaxResidenceSendOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  validDate: SortOrderSchema.optional(),
  requestDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  receiveDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hasCert: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fileData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fileName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional(),
  SendLog: z.lazy(() => TaxResidenceSendOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertOrderByWithRelationInput>;
export const TaxResidenceCertOrderByWithRelationInputObjectZodSchema = makeSchema();
