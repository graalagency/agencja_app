import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactCreateManyContactInputObjectSchema as ClientContactCreateManyContactInputObjectSchema } from './ClientContactCreateManyContactInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientContactCreateManyContactInputObjectSchema), z.lazy(() => ClientContactCreateManyContactInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientContactCreateManyContactInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientContactCreateManyContactInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateManyContactInputEnvelope>;
export const ClientContactCreateManyContactInputEnvelopeObjectZodSchema = makeSchema();
