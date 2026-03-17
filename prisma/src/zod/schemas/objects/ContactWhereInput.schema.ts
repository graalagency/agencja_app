import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ClientNullableScalarRelationFilterObjectSchema as ClientNullableScalarRelationFilterObjectSchema } from './ClientNullableScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const contactwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ContactWhereInputObjectSchema), z.lazy(() => ContactWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContactWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContactWhereInputObjectSchema), z.lazy(() => ContactWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  phoneNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  middleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  informal: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  contactPosition: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  accountant: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  photos: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Client: z.union([z.lazy(() => ClientNullableScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional()
}).strict();
export const ContactWhereInputObjectSchema: z.ZodType<Prisma.ContactWhereInput> = contactwhereinputSchema as unknown as z.ZodType<Prisma.ContactWhereInput>;
export const ContactWhereInputObjectZodSchema = contactwhereinputSchema;
