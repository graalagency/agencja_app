import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { TitleArgsObjectSchema as TitleArgsObjectSchema } from './TitleArgs.schema';
import { AgreementRightFindManySchema as AgreementRightFindManySchema } from '../findManyAgreementRight.schema';
import { AgreementEventFindManySchema as AgreementEventFindManySchema } from '../findManyAgreementEvent.schema';
import { AgreementAdvanceFindManySchema as AgreementAdvanceFindManySchema } from '../findManyAgreementAdvance.schema';
import { AgreementRoyRateFindManySchema as AgreementRoyRateFindManySchema } from '../findManyAgreementRoyRate.schema';
import { AgreementCountOutputTypeArgsObjectSchema as AgreementCountOutputTypeArgsObjectSchema } from './AgreementCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  publisherId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  titleId: z.boolean().optional(),
  agrDate: z.boolean().optional(),
  validYY: z.boolean().optional(),
  pubTermMM: z.boolean().optional(),
  maxCopies: z.boolean().optional(),
  minCopies: z.boolean().optional(),
  copiesToOwner: z.boolean().optional(),
  copiesToGraal: z.boolean().optional(),
  currencyCode: z.boolean().optional(),
  commission: z.boolean().optional(),
  commissionMaterials: z.boolean().optional(),
  estimatedCopyPrice: z.boolean().optional(),
  graalShare: z.boolean().optional(),
  graalRepresent: z.boolean().optional(),
  languageCode: z.boolean().optional(),
  countryId: z.boolean().optional(),
  localTitle: z.boolean().optional(),
  localIsbn: z.boolean().optional(),
  localPubDate: z.boolean().optional(),
  clientReference: z.boolean().optional(),
  agrDoc: z.boolean().optional(),
  status: z.boolean().optional(),
  remarks: z.boolean().optional(),
  agentId: z.boolean().optional(),
  dateMod: z.boolean().optional(),
  userMod: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleArgsObjectSchema)]).optional(),
  Rights: z.union([z.boolean(), z.lazy(() => AgreementRightFindManySchema)]).optional(),
  Events: z.union([z.boolean(), z.lazy(() => AgreementEventFindManySchema)]).optional(),
  Advances: z.union([z.boolean(), z.lazy(() => AgreementAdvanceFindManySchema)]).optional(),
  RoyRates: z.union([z.boolean(), z.lazy(() => AgreementRoyRateFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgreementSelectObjectSchema: z.ZodType<Prisma.AgreementSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementSelect>;
export const AgreementSelectObjectZodSchema = makeSchema();
