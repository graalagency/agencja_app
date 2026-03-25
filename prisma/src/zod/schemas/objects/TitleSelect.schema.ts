import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { TitleAuthorFindManySchema as TitleAuthorFindManySchema } from '../findManyTitleAuthor.schema';
import { AgreementFindManySchema as AgreementFindManySchema } from '../findManyAgreement.schema';
import { SubmissionFindManySchema as SubmissionFindManySchema } from '../findManySubmission.schema';
import { TitleCountOutputTypeArgsObjectSchema as TitleCountOutputTypeArgsObjectSchema } from './TitleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  publisherId: z.boolean().optional(),
  title: z.boolean().optional(),
  isbn: z.boolean().optional(),
  languageCode: z.boolean().optional(),
  classCode: z.boolean().optional(),
  edition: z.boolean().optional(),
  pages: z.boolean().optional(),
  copyrightYear: z.boolean().optional(),
  copyrightOwner: z.boolean().optional(),
  keywords: z.boolean().optional(),
  volume: z.boolean().optional(),
  totalVolumes: z.boolean().optional(),
  isHit: z.boolean().optional(),
  isCollection: z.boolean().optional(),
  isCD: z.boolean().optional(),
  notes: z.boolean().optional(),
  dateOfReceipt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleAuthorFindManySchema)]).optional(),
  Agreements: z.union([z.boolean(), z.lazy(() => AgreementFindManySchema)]).optional(),
  Submissions: z.union([z.boolean(), z.lazy(() => SubmissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TitleSelectObjectSchema: z.ZodType<Prisma.TitleSelect> = makeSchema() as unknown as z.ZodType<Prisma.TitleSelect>;
export const TitleSelectObjectZodSchema = makeSchema();
