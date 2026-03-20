import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TaxResidenceCertScalarRelationFilterObjectSchema as TaxResidenceCertScalarRelationFilterObjectSchema } from './TaxResidenceCertScalarRelationFilter.schema';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './TaxResidenceCertWhereInput.schema';
import { ClientNullableScalarRelationFilterObjectSchema as ClientNullableScalarRelationFilterObjectSchema } from './ClientNullableScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { PublisherNullableScalarRelationFilterObjectSchema as PublisherNullableScalarRelationFilterObjectSchema } from './PublisherNullableScalarRelationFilter.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const taxresidencesendwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaxResidenceSendWhereInputObjectSchema), z.lazy(() => TaxResidenceSendWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaxResidenceSendWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaxResidenceSendWhereInputObjectSchema), z.lazy(() => TaxResidenceSendWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  certId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publisherId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  dateSend: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  sendOrig: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  sendCopy: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Cert: z.union([z.lazy(() => TaxResidenceCertScalarRelationFilterObjectSchema), z.lazy(() => TaxResidenceCertWhereInputObjectSchema)]).optional(),
  Client: z.union([z.lazy(() => ClientNullableScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  Publisher: z.union([z.lazy(() => PublisherNullableScalarRelationFilterObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema)]).optional()
}).strict();
export const TaxResidenceSendWhereInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendWhereInput> = taxresidencesendwhereinputSchema as unknown as z.ZodType<Prisma.TaxResidenceSendWhereInput>;
export const TaxResidenceSendWhereInputObjectZodSchema = taxresidencesendwhereinputSchema;
