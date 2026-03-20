import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateManyClientInputObjectSchema as TitleCreateManyClientInputObjectSchema } from './TitleCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TitleCreateManyClientInputObjectSchema), z.lazy(() => TitleCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TitleCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.TitleCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateManyClientInputEnvelope>;
export const TitleCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
