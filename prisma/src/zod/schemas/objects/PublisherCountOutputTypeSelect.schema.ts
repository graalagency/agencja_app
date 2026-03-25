import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCountOutputTypeCountChildrenArgsObjectSchema as PublisherCountOutputTypeCountChildrenArgsObjectSchema } from './PublisherCountOutputTypeCountChildrenArgs.schema';
import { PublisherCountOutputTypeCountPublisherContactArgsObjectSchema as PublisherCountOutputTypeCountPublisherContactArgsObjectSchema } from './PublisherCountOutputTypeCountPublisherContactArgs.schema';
import { PublisherCountOutputTypeCountTaxResidenceCertArgsObjectSchema as PublisherCountOutputTypeCountTaxResidenceCertArgsObjectSchema } from './PublisherCountOutputTypeCountTaxResidenceCertArgs.schema';
import { PublisherCountOutputTypeCountTaxResidenceSendArgsObjectSchema as PublisherCountOutputTypeCountTaxResidenceSendArgsObjectSchema } from './PublisherCountOutputTypeCountTaxResidenceSendArgs.schema';
import { PublisherCountOutputTypeCountTitleArgsObjectSchema as PublisherCountOutputTypeCountTitleArgsObjectSchema } from './PublisherCountOutputTypeCountTitleArgs.schema';
import { PublisherCountOutputTypeCountAgreementsArgsObjectSchema as PublisherCountOutputTypeCountAgreementsArgsObjectSchema } from './PublisherCountOutputTypeCountAgreementsArgs.schema';
import { PublisherCountOutputTypeCountSubmissionsArgsObjectSchema as PublisherCountOutputTypeCountSubmissionsArgsObjectSchema } from './PublisherCountOutputTypeCountSubmissionsArgs.schema'

const makeSchema = () => z.object({
  Children: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountChildrenArgsObjectSchema)]).optional(),
  PublisherContact: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountPublisherContactArgsObjectSchema)]).optional(),
  TaxResidenceCert: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountTaxResidenceCertArgsObjectSchema)]).optional(),
  TaxResidenceSend: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountTaxResidenceSendArgsObjectSchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountTitleArgsObjectSchema)]).optional(),
  Agreements: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountAgreementsArgsObjectSchema)]).optional(),
  Submissions: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeCountSubmissionsArgsObjectSchema)]).optional()
}).strict();
export const PublisherCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PublisherCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCountOutputTypeSelect>;
export const PublisherCountOutputTypeSelectObjectZodSchema = makeSchema();
