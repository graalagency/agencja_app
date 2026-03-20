import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ContactScalarRelationFilterObjectSchema as ContactScalarRelationFilterObjectSchema } from './ContactScalarRelationFilter.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { ClientScalarRelationFilterObjectSchema as ClientScalarRelationFilterObjectSchema } from './ClientScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const clientcontactwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientContactWhereInputObjectSchema), z.lazy(() => ClientContactWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientContactWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientContactWhereInputObjectSchema), z.lazy(() => ClientContactWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Contact: z.union([z.lazy(() => ContactScalarRelationFilterObjectSchema), z.lazy(() => ContactWhereInputObjectSchema)]).optional(),
  Client: z.union([z.lazy(() => ClientScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional()
}).strict();
export const ClientContactWhereInputObjectSchema: z.ZodType<Prisma.ClientContactWhereInput> = clientcontactwhereinputSchema as unknown as z.ZodType<Prisma.ClientContactWhereInput>;
export const ClientContactWhereInputObjectZodSchema = clientcontactwhereinputSchema;
