import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactCreateManyClientInputObjectSchema as ClientContactCreateManyClientInputObjectSchema } from './ClientContactCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientContactCreateManyClientInputObjectSchema), z.lazy(() => ClientContactCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientContactCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientContactCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateManyClientInputEnvelope>;
export const ClientContactCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
