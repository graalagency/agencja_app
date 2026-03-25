import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './PublisherOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { TitleOrderByWithRelationInputObjectSchema as TitleOrderByWithRelationInputObjectSchema } from './TitleOrderByWithRelationInput.schema';
import { AgreementRightOrderByRelationAggregateInputObjectSchema as AgreementRightOrderByRelationAggregateInputObjectSchema } from './AgreementRightOrderByRelationAggregateInput.schema';
import { AgreementEventOrderByRelationAggregateInputObjectSchema as AgreementEventOrderByRelationAggregateInputObjectSchema } from './AgreementEventOrderByRelationAggregateInput.schema';
import { AgreementAdvanceOrderByRelationAggregateInputObjectSchema as AgreementAdvanceOrderByRelationAggregateInputObjectSchema } from './AgreementAdvanceOrderByRelationAggregateInput.schema';
import { AgreementRoyRateOrderByRelationAggregateInputObjectSchema as AgreementRoyRateOrderByRelationAggregateInputObjectSchema } from './AgreementRoyRateOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publisherId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  titleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agrDate: SortOrderSchema.optional(),
  validYY: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pubTermMM: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maxCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copiesToOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  copiesToGraal: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  currencyCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimatedCopyPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  graalShare: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  graalRepresent: SortOrderSchema.optional(),
  languageCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  countryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  localTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  localIsbn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  localPubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientReference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  Publisher: z.lazy(() => PublisherOrderByWithRelationInputObjectSchema).optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  Title: z.lazy(() => TitleOrderByWithRelationInputObjectSchema).optional(),
  Rights: z.lazy(() => AgreementRightOrderByRelationAggregateInputObjectSchema).optional(),
  Events: z.lazy(() => AgreementEventOrderByRelationAggregateInputObjectSchema).optional(),
  Advances: z.lazy(() => AgreementAdvanceOrderByRelationAggregateInputObjectSchema).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AgreementOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgreementOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementOrderByWithRelationInput>;
export const AgreementOrderByWithRelationInputObjectZodSchema = makeSchema();
