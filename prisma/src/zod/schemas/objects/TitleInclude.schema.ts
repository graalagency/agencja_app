import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { TitleAuthorFindManySchema as TitleAuthorFindManySchema } from '../findManyTitleAuthor.schema';
import { AgreementFindManySchema as AgreementFindManySchema } from '../findManyAgreement.schema';
import { SubmissionFindManySchema as SubmissionFindManySchema } from '../findManySubmission.schema';
import { TitleCountOutputTypeArgsObjectSchema as TitleCountOutputTypeArgsObjectSchema } from './TitleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  TitleAuthors: z.union([z.boolean(), z.lazy(() => TitleAuthorFindManySchema)]).optional(),
  Agreements: z.union([z.boolean(), z.lazy(() => AgreementFindManySchema)]).optional(),
  Submissions: z.union([z.boolean(), z.lazy(() => SubmissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TitleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TitleIncludeObjectSchema: z.ZodType<Prisma.TitleInclude> = makeSchema() as unknown as z.ZodType<Prisma.TitleInclude>;
export const TitleIncludeObjectZodSchema = makeSchema();
