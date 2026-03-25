import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutTitleInputObjectSchema as ClientCreateNestedOneWithoutTitleInputObjectSchema } from './ClientCreateNestedOneWithoutTitleInput.schema';
import { PublisherCreateNestedOneWithoutTitleInputObjectSchema as PublisherCreateNestedOneWithoutTitleInputObjectSchema } from './PublisherCreateNestedOneWithoutTitleInput.schema';
import { TitleAuthorCreateNestedManyWithoutTitleInputObjectSchema as TitleAuthorCreateNestedManyWithoutTitleInputObjectSchema } from './TitleAuthorCreateNestedManyWithoutTitleInput.schema';
import { AgreementCreateNestedManyWithoutTitleInputObjectSchema as AgreementCreateNestedManyWithoutTitleInputObjectSchema } from './AgreementCreateNestedManyWithoutTitleInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
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
  Client: z.lazy(() => ClientCreateNestedOneWithoutTitleInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutTitleInputObjectSchema).optional(),
  TitleAuthors: z.lazy(() => TitleAuthorCreateNestedManyWithoutTitleInputObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementCreateNestedManyWithoutTitleInputObjectSchema).optional()
}).strict();
export const TitleCreateWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.TitleCreateWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateWithoutSubmissionsInput>;
export const TitleCreateWithoutSubmissionsInputObjectZodSchema = makeSchema();
