import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorCreateManyTitleInputObjectSchema as TitleAuthorCreateManyTitleInputObjectSchema } from './TitleAuthorCreateManyTitleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TitleAuthorCreateManyTitleInputObjectSchema), z.lazy(() => TitleAuthorCreateManyTitleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TitleAuthorCreateManyTitleInputEnvelopeObjectSchema: z.ZodType<Prisma.TitleAuthorCreateManyTitleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyTitleInputEnvelope>;
export const TitleAuthorCreateManyTitleInputEnvelopeObjectZodSchema = makeSchema();
