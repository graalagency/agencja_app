import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const clientcontactscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientContactScalarWhereInputObjectSchema), z.lazy(() => ClientContactScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientContactScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientContactScalarWhereInputObjectSchema), z.lazy(() => ClientContactScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClientContactScalarWhereInputObjectSchema: z.ZodType<Prisma.ClientContactScalarWhereInput> = clientcontactscalarwhereinputSchema as unknown as z.ZodType<Prisma.ClientContactScalarWhereInput>;
export const ClientContactScalarWhereInputObjectZodSchema = clientcontactscalarwhereinputSchema;
