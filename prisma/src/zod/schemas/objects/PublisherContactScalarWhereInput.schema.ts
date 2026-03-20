import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const publishercontactscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PublisherContactScalarWhereInputObjectSchema), z.lazy(() => PublisherContactScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublisherContactScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublisherContactScalarWhereInputObjectSchema), z.lazy(() => PublisherContactScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  publisherId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PublisherContactScalarWhereInputObjectSchema: z.ZodType<Prisma.PublisherContactScalarWhereInput> = publishercontactscalarwhereinputSchema as unknown as z.ZodType<Prisma.PublisherContactScalarWhereInput>;
export const PublisherContactScalarWhereInputObjectZodSchema = publishercontactscalarwhereinputSchema;
