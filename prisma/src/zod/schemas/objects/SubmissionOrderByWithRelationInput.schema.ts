import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TitleOrderByWithRelationInputObjectSchema as TitleOrderByWithRelationInputObjectSchema } from './TitleOrderByWithRelationInput.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './PublisherOrderByWithRelationInput.schema';
import { SubmissionEventOrderByRelationAggregateInputObjectSchema as SubmissionEventOrderByRelationAggregateInputObjectSchema } from './SubmissionEventOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  titleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  contactId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copyTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submSentTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submDate: SortOrderSchema.optional(),
  sentDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  returnDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  noOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  trackingNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  exclusive: SortOrderSchema.optional(),
  submNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  Title: z.lazy(() => TitleOrderByWithRelationInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional(),
  Events: z.lazy(() => SubmissionEventOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SubmissionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SubmissionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionOrderByWithRelationInput>;
export const SubmissionOrderByWithRelationInputObjectZodSchema = makeSchema();
