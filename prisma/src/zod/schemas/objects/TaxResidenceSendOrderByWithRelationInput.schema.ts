import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaxResidenceCertOrderByWithRelationInputObjectSchema as TaxResidenceCertOrderByWithRelationInputObjectSchema } from './TaxResidenceCertOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './PublisherOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  certId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateSend: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sendOrig: SortOrderSchema.optional(),
  sendCopy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  Cert: z.lazy(() => TaxResidenceCertOrderByWithRelationInputObjectSchema).optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TaxResidenceSendOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendOrderByWithRelationInput>;
export const TaxResidenceSendOrderByWithRelationInputObjectZodSchema = makeSchema();
