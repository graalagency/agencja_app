import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ContactScalarRelationFilterObjectSchema as ContactScalarRelationFilterObjectSchema } from './ContactScalarRelationFilter.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { PublisherScalarRelationFilterObjectSchema as PublisherScalarRelationFilterObjectSchema } from './PublisherScalarRelationFilter.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const publishercontactwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PublisherContactWhereInputObjectSchema), z.lazy(() => PublisherContactWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublisherContactWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublisherContactWhereInputObjectSchema), z.lazy(() => PublisherContactWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  publisherId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Contact: z.union([z.lazy(() => ContactScalarRelationFilterObjectSchema), z.lazy(() => ContactWhereInputObjectSchema)]).optional(),
  Publisher: z.union([z.lazy(() => PublisherScalarRelationFilterObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema)]).optional()
}).strict();
export const PublisherContactWhereInputObjectSchema: z.ZodType<Prisma.PublisherContactWhereInput> = publishercontactwhereinputSchema as unknown as z.ZodType<Prisma.PublisherContactWhereInput>;
export const PublisherContactWhereInputObjectZodSchema = publishercontactwhereinputSchema;
