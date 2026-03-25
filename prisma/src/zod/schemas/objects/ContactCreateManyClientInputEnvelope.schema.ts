import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateManyClientInputObjectSchema as ContactCreateManyClientInputObjectSchema } from './ContactCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ContactCreateManyClientInputObjectSchema), z.lazy(() => ContactCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ContactCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.ContactCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateManyClientInputEnvelope>;
export const ContactCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
