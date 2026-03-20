import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { PublisherFindManySchema as PublisherFindManySchema } from '../findManyPublisher.schema';
import { PublisherContactFindManySchema as PublisherContactFindManySchema } from '../findManyPublisherContact.schema';
import { TaxResidenceCertFindManySchema as TaxResidenceCertFindManySchema } from '../findManyTaxResidenceCert.schema';
import { TaxResidenceSendFindManySchema as TaxResidenceSendFindManySchema } from '../findManyTaxResidenceSend.schema';
import { TitleFindManySchema as TitleFindManySchema } from '../findManyTitle.schema';
import { PublisherCountOutputTypeArgsObjectSchema as PublisherCountOutputTypeArgsObjectSchema } from './PublisherCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Parent: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  Children: z.union([z.boolean(), z.lazy(() => PublisherFindManySchema)]).optional(),
  PublisherContact: z.union([z.boolean(), z.lazy(() => PublisherContactFindManySchema)]).optional(),
  TaxResidenceCert: z.union([z.boolean(), z.lazy(() => TaxResidenceCertFindManySchema)]).optional(),
  TaxResidenceSend: z.union([z.boolean(), z.lazy(() => TaxResidenceSendFindManySchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PublisherCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PublisherIncludeObjectSchema: z.ZodType<Prisma.PublisherInclude> = makeSchema() as unknown as z.ZodType<Prisma.PublisherInclude>;
export const PublisherIncludeObjectZodSchema = makeSchema();
