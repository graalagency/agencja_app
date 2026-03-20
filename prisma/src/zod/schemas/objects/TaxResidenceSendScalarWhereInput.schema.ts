import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const taxresidencesendscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema), z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  certId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publisherId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  dateSend: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  sendOrig: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  sendCopy: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TaxResidenceSendScalarWhereInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendScalarWhereInput> = taxresidencesendscalarwhereinputSchema as unknown as z.ZodType<Prisma.TaxResidenceSendScalarWhereInput>;
export const TaxResidenceSendScalarWhereInputObjectZodSchema = taxresidencesendscalarwhereinputSchema;
