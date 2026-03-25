import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ClientNullableScalarRelationFilterObjectSchema as ClientNullableScalarRelationFilterObjectSchema } from './ClientNullableScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { PublisherNullableScalarRelationFilterObjectSchema as PublisherNullableScalarRelationFilterObjectSchema } from './PublisherNullableScalarRelationFilter.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { TitleAuthorListRelationFilterObjectSchema as TitleAuthorListRelationFilterObjectSchema } from './TitleAuthorListRelationFilter.schema';
import { AgreementListRelationFilterObjectSchema as AgreementListRelationFilterObjectSchema } from './AgreementListRelationFilter.schema';
import { SubmissionListRelationFilterObjectSchema as SubmissionListRelationFilterObjectSchema } from './SubmissionListRelationFilter.schema'

const titlewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TitleWhereInputObjectSchema), z.lazy(() => TitleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TitleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TitleWhereInputObjectSchema), z.lazy(() => TitleWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sourceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publisherId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isbn: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  languageCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  classCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  edition: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pages: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  copyrightYear: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  copyrightOwner: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  keywords: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  volume: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  totalVolumes: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isHit: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isCollection: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isCD: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  dateOfReceipt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Client: z.union([z.lazy(() => ClientNullableScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  Publisher: z.union([z.lazy(() => PublisherNullableScalarRelationFilterObjectSchema), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  TitleAuthors: z.lazy(() => TitleAuthorListRelationFilterObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementListRelationFilterObjectSchema).optional(),
  Submissions: z.lazy(() => SubmissionListRelationFilterObjectSchema).optional()
}).strict();
export const TitleWhereInputObjectSchema: z.ZodType<Prisma.TitleWhereInput> = titlewhereinputSchema as unknown as z.ZodType<Prisma.TitleWhereInput>;
export const TitleWhereInputObjectZodSchema = titlewhereinputSchema;
