import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema as TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema } from './TitleCreateNestedOneWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  isMain: z.boolean().optional(),
  order: z.number().int().optional(),
  Title: z.lazy(() => TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema)
}).strict();
export const TitleAuthorCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateWithoutAuthorInput>;
export const TitleAuthorCreateWithoutAuthorInputObjectZodSchema = makeSchema();
