import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const publishercontactscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PublisherContactScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PublisherContactScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublisherContactScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublisherContactScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PublisherContactScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  contactId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  publisherId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PublisherContactScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PublisherContactScalarWhereWithAggregatesInput> = publishercontactscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PublisherContactScalarWhereWithAggregatesInput>;
export const PublisherContactScalarWhereWithAggregatesInputObjectZodSchema = publishercontactscalarwherewithaggregatesinputSchema;
