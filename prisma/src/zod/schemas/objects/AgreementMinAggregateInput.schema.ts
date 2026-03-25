import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  publisherId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  titleId: z.literal(true).optional(),
  agrDate: z.literal(true).optional(),
  validYY: z.literal(true).optional(),
  pubTermMM: z.literal(true).optional(),
  maxCopies: z.literal(true).optional(),
  minCopies: z.literal(true).optional(),
  copiesToOwner: z.literal(true).optional(),
  copiesToGraal: z.literal(true).optional(),
  currencyCode: z.literal(true).optional(),
  commission: z.literal(true).optional(),
  commissionMaterials: z.literal(true).optional(),
  estimatedCopyPrice: z.literal(true).optional(),
  graalShare: z.literal(true).optional(),
  graalRepresent: z.literal(true).optional(),
  languageCode: z.literal(true).optional(),
  countryId: z.literal(true).optional(),
  localTitle: z.literal(true).optional(),
  localIsbn: z.literal(true).optional(),
  localPubDate: z.literal(true).optional(),
  clientReference: z.literal(true).optional(),
  agrDoc: z.literal(true).optional(),
  status: z.literal(true).optional(),
  remarks: z.literal(true).optional(),
  agentId: z.literal(true).optional(),
  dateMod: z.literal(true).optional(),
  userMod: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AgreementMinAggregateInputObjectSchema: z.ZodType<Prisma.AgreementMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementMinAggregateInputType>;
export const AgreementMinAggregateInputObjectZodSchema = makeSchema();
