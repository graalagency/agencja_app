import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { PublisherFindManySchema as PublisherFindManySchema } from '../findManyPublisher.schema';
import { PublisherContactFindManySchema as PublisherContactFindManySchema } from '../findManyPublisherContact.schema';
import { TaxResidenceCertFindManySchema as TaxResidenceCertFindManySchema } from '../findManyTaxResidenceCert.schema';
import { TaxResidenceSendFindManySchema as TaxResidenceSendFindManySchema } from '../findManyTaxResidenceSend.schema';
import { TitleFindManySchema as TitleFindManySchema } from '../findManyTitle.schema';
import { AgreementFindManySchema as AgreementFindManySchema } from '../findManyAgreement.schema';
import { SubmissionFindManySchema as SubmissionFindManySchema } from '../findManySubmission.schema';
import { PublisherCountOutputTypeArgsObjectSchema as PublisherCountOutputTypeArgsObjectSchema } from './PublisherCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  name: z.boolean().optional(),
  abbreviation: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  fax: z.boolean().optional(),
  www: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  address: z.boolean().optional(),
  address2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  language: z.boolean().optional(),
  legalForm: z.boolean().optional(),
  nip: z.boolean().optional(),
  vatId: z.boolean().optional(),
  regon: z.boolean().optional(),
  jurisdiction: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  bankAccount: z.boolean().optional(),
  bankName: z.boolean().optional(),
  bankAddress: z.boolean().optional(),
  bankRoutingNo: z.boolean().optional(),
  bankAccountName: z.boolean().optional(),
  commission: z.boolean().optional(),
  commissionForeign: z.boolean().optional(),
  commissionMaterials: z.boolean().optional(),
  repModeId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  Parent: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  Children: z.union([z.boolean(), z.lazy(() => PublisherFindManySchema)]).optional(),
  PublisherContact: z.union([z.boolean(), z.lazy(() => PublisherContactFindManySchema)]).optional(),
  TaxResidenceCert: z.union([z.boolean(), z.lazy(() => TaxResidenceCertFindManySchema)]).optional(),
  TaxResidenceSend: z.union([z.boolean(), z.lazy(() => TaxResidenceSendFindManySchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleFindManySchema)]).optional(),
  Agreements: z.union([z.boolean(), z.lazy(() => AgreementFindManySchema)]).optional(),
  Submissions: z.union([z.boolean(), z.lazy(() => SubmissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PublisherSelectObjectSchema: z.ZodType<Prisma.PublisherSelect> = makeSchema() as unknown as z.ZodType<Prisma.PublisherSelect>;
export const PublisherSelectObjectZodSchema = makeSchema();
