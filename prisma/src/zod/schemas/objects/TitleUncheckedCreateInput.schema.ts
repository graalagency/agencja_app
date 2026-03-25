import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorUncheckedCreateNestedManyWithoutTitleInputObjectSchema as TitleAuthorUncheckedCreateNestedManyWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedCreateNestedManyWithoutTitleInput.schema';
import { AgreementUncheckedCreateNestedManyWithoutTitleInputObjectSchema as AgreementUncheckedCreateNestedManyWithoutTitleInputObjectSchema } from './AgreementUncheckedCreateNestedManyWithoutTitleInput.schema';
import { SubmissionUncheckedCreateNestedManyWithoutTitleInputObjectSchema as SubmissionUncheckedCreateNestedManyWithoutTitleInputObjectSchema } from './SubmissionUncheckedCreateNestedManyWithoutTitleInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
  title: z.string(),
  isbn: z.string().optional().nullable(),
  languageCode: z.string().optional().nullable(),
  classCode: z.string().optional().nullable(),
  edition: z.number().int().optional().nullable(),
  pages: z.number().int().optional().nullable(),
  copyrightYear: z.string().optional().nullable(),
  copyrightOwner: z.string().optional().nullable(),
  keywords: z.string().optional().nullable(),
  volume: z.number().int().optional().nullable(),
  totalVolumes: z.number().int().optional().nullable(),
  isHit: z.boolean().optional(),
  isCollection: z.boolean().optional(),
  isCD: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  dateOfReceipt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  TitleAuthors: z.lazy(() => TitleAuthorUncheckedCreateNestedManyWithoutTitleInputObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementUncheckedCreateNestedManyWithoutTitleInputObjectSchema).optional(),
  Submissions: z.lazy(() => SubmissionUncheckedCreateNestedManyWithoutTitleInputObjectSchema).optional()
}).strict();
export const TitleUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TitleUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUncheckedCreateInput>;
export const TitleUncheckedCreateInputObjectZodSchema = makeSchema();
