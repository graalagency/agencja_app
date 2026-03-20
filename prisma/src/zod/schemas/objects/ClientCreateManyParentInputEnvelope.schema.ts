import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateManyParentInputObjectSchema as ClientCreateManyParentInputObjectSchema } from './ClientCreateManyParentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientCreateManyParentInputObjectSchema), z.lazy(() => ClientCreateManyParentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientCreateManyParentInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientCreateManyParentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateManyParentInputEnvelope>;
export const ClientCreateManyParentInputEnvelopeObjectZodSchema = makeSchema();
