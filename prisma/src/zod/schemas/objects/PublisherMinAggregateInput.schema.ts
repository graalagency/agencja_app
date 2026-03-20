import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  abbreviation: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  fax: z.literal(true).optional(),
  www: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  address: z.literal(true).optional(),
  address2: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  postalCode: z.literal(true).optional(),
  country: z.literal(true).optional(),
  language: z.literal(true).optional(),
  legalForm: z.literal(true).optional(),
  nip: z.literal(true).optional(),
  vatId: z.literal(true).optional(),
  regon: z.literal(true).optional(),
  jurisdiction: z.literal(true).optional(),
  status: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  bankAccount: z.literal(true).optional(),
  bankName: z.literal(true).optional(),
  bankAddress: z.literal(true).optional(),
  bankRoutingNo: z.literal(true).optional(),
  bankAccountName: z.literal(true).optional(),
  commission: z.literal(true).optional(),
  commissionForeign: z.literal(true).optional(),
  commissionMaterials: z.literal(true).optional(),
  repModeId: z.literal(true).optional(),
  parentId: z.literal(true).optional()
}).strict();
export const PublisherMinAggregateInputObjectSchema: z.ZodType<Prisma.PublisherMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublisherMinAggregateInputType>;
export const PublisherMinAggregateInputObjectZodSchema = makeSchema();
