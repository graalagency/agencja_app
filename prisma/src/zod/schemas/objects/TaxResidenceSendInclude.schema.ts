import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertArgsObjectSchema as TaxResidenceCertArgsObjectSchema } from './TaxResidenceCertArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema'

const makeSchema = () => z.object({
  Cert: z.union([z.boolean(), z.lazy(() => TaxResidenceCertArgsObjectSchema)]).optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional()
}).strict();
export const TaxResidenceSendIncludeObjectSchema: z.ZodType<Prisma.TaxResidenceSendInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendInclude>;
export const TaxResidenceSendIncludeObjectZodSchema = makeSchema();
