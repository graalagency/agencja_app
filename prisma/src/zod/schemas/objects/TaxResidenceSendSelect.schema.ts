import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertArgsObjectSchema as TaxResidenceCertArgsObjectSchema } from './TaxResidenceCertArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  certId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  publisherId: z.boolean().optional(),
  dateSend: z.boolean().optional(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Cert: z.union([z.boolean(), z.lazy(() => TaxResidenceCertArgsObjectSchema)]).optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional()
}).strict();
export const TaxResidenceSendSelectObjectSchema: z.ZodType<Prisma.TaxResidenceSendSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendSelect>;
export const TaxResidenceSendSelectObjectZodSchema = makeSchema();
