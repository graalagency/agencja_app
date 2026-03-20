import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { TaxResidenceSendFindManySchema as TaxResidenceSendFindManySchema } from '../findManyTaxResidenceSend.schema';
import { TaxResidenceCertCountOutputTypeArgsObjectSchema as TaxResidenceCertCountOutputTypeArgsObjectSchema } from './TaxResidenceCertCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  SendLog: z.union([z.boolean(), z.lazy(() => TaxResidenceSendFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaxResidenceCertCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaxResidenceCertIncludeObjectSchema: z.ZodType<Prisma.TaxResidenceCertInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertInclude>;
export const TaxResidenceCertIncludeObjectZodSchema = makeSchema();
