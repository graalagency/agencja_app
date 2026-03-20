import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleScalarWhereInputObjectSchema as TitleScalarWhereInputObjectSchema } from './TitleScalarWhereInput.schema';
import { TitleUpdateManyMutationInputObjectSchema as TitleUpdateManyMutationInputObjectSchema } from './TitleUpdateManyMutationInput.schema';
import { TitleUncheckedUpdateManyWithoutClientInputObjectSchema as TitleUncheckedUpdateManyWithoutClientInputObjectSchema } from './TitleUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TitleUpdateManyMutationInputObjectSchema), z.lazy(() => TitleUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const TitleUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.TitleUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateManyWithWhereWithoutClientInput>;
export const TitleUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
