import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const clientcontactscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientContactScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientContactScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientContactScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientContactScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientContactScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  contactId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClientContactScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ClientContactScalarWhereWithAggregatesInput> = clientcontactscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ClientContactScalarWhereWithAggregatesInput>;
export const ClientContactScalarWhereWithAggregatesInputObjectZodSchema = clientcontactscalarwherewithaggregatesinputSchema;
