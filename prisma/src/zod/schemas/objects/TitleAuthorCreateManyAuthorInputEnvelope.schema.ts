import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorCreateManyAuthorInputObjectSchema as TitleAuthorCreateManyAuthorInputObjectSchema } from './TitleAuthorCreateManyAuthorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TitleAuthorCreateManyAuthorInputObjectSchema), z.lazy(() => TitleAuthorCreateManyAuthorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema: z.ZodType<Prisma.TitleAuthorCreateManyAuthorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyAuthorInputEnvelope>;
export const TitleAuthorCreateManyAuthorInputEnvelopeObjectZodSchema = makeSchema();
