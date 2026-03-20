import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorScalarWhereInputObjectSchema as TitleAuthorScalarWhereInputObjectSchema } from './TitleAuthorScalarWhereInput.schema';
import { TitleAuthorUpdateManyMutationInputObjectSchema as TitleAuthorUpdateManyMutationInputObjectSchema } from './TitleAuthorUpdateManyMutationInput.schema';
import { TitleAuthorUncheckedUpdateManyWithoutAuthorInputObjectSchema as TitleAuthorUncheckedUpdateManyWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedUpdateManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TitleAuthorUpdateManyMutationInputObjectSchema), z.lazy(() => TitleAuthorUncheckedUpdateManyWithoutAuthorInputObjectSchema)])
}).strict();
export const TitleAuthorUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorUpdateManyWithWhereWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyWithWhereWithoutAuthorInput>;
export const TitleAuthorUpdateManyWithWhereWithoutAuthorInputObjectZodSchema = makeSchema();
