import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema'

const authorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthorScalarWhereInputObjectSchema), z.lazy(() => AuthorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthorScalarWhereInputObjectSchema), z.lazy(() => AuthorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  middleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  suffix: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  penName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  photos: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  personalEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  workEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AuthorScalarWhereInputObjectSchema: z.ZodType<Prisma.AuthorScalarWhereInput> = authorscalarwhereinputSchema as unknown as z.ZodType<Prisma.AuthorScalarWhereInput>;
export const AuthorScalarWhereInputObjectZodSchema = authorscalarwhereinputSchema;
