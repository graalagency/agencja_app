import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './PublisherOrderByWithRelationInput.schema';
import { TitleAuthorOrderByRelationAggregateInputObjectSchema as TitleAuthorOrderByRelationAggregateInputObjectSchema } from './TitleAuthorOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: SortOrderSchema.optional(),
  isbn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  languageCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  classCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  edition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pages: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copyrightYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copyrightOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  keywords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  volume: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  totalVolumes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isHit: SortOrderSchema.optional(),
  isCollection: SortOrderSchema.optional(),
  isCD: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateOfReceipt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional(),
  TitleAuthors: z.lazy(() => TitleAuthorOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TitleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TitleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleOrderByWithRelationInput>;
export const TitleOrderByWithRelationInputObjectZodSchema = makeSchema();
