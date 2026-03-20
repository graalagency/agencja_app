import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { TaxResidenceSendFindManySchema as TaxResidenceSendFindManySchema } from '../findManyTaxResidenceSend.schema';
import { TaxResidenceCertCountOutputTypeArgsObjectSchema as TaxResidenceCertCountOutputTypeArgsObjectSchema } from './TaxResidenceCertCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  publisherId: z.boolean().optional(),
  validDate: z.boolean().optional(),
  requestDate: z.boolean().optional(),
  receiveDate: z.boolean().optional(),
  hasCert: z.boolean().optional(),
  notes: z.boolean().optional(),
  fileData: z.boolean().optional(),
  fileName: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  SendLog: z.union([z.boolean(), z.lazy(() => TaxResidenceSendFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaxResidenceCertCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaxResidenceCertSelectObjectSchema: z.ZodType<Prisma.TaxResidenceCertSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertSelect>;
export const TaxResidenceCertSelectObjectZodSchema = makeSchema();
