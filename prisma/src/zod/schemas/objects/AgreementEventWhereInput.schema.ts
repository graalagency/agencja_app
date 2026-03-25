import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AgreementScalarRelationFilterObjectSchema as AgreementScalarRelationFilterObjectSchema } from './AgreementScalarRelationFilter.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const agreementeventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementEventWhereInputObjectSchema), z.lazy(() => AgreementEventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementEventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementEventWhereInputObjectSchema), z.lazy(() => AgreementEventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  agreementId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  eventCode: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  eventDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  noOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  dateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Agreement: z.union([z.lazy(() => AgreementScalarRelationFilterObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema)]).optional()
}).strict();
export const AgreementEventWhereInputObjectSchema: z.ZodType<Prisma.AgreementEventWhereInput> = agreementeventwhereinputSchema as unknown as z.ZodType<Prisma.AgreementEventWhereInput>;
export const AgreementEventWhereInputObjectZodSchema = agreementeventwhereinputSchema;
