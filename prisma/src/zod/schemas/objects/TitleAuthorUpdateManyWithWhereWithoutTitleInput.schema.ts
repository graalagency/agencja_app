import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorScalarWhereInputObjectSchema as TitleAuthorScalarWhereInputObjectSchema } from './TitleAuthorScalarWhereInput.schema';
import { TitleAuthorUpdateManyMutationInputObjectSchema as TitleAuthorUpdateManyMutationInputObjectSchema } from './TitleAuthorUpdateManyMutationInput.schema';
import { TitleAuthorUncheckedUpdateManyWithoutTitleInputObjectSchema as TitleAuthorUncheckedUpdateManyWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedUpdateManyWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TitleAuthorUpdateManyMutationInputObjectSchema), z.lazy(() => TitleAuthorUncheckedUpdateManyWithoutTitleInputObjectSchema)])
}).strict();
export const TitleAuthorUpdateManyWithWhereWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateManyWithWhereWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyWithWhereWithoutTitleInput>;
export const TitleAuthorUpdateManyWithWhereWithoutTitleInputObjectZodSchema = makeSchema();
