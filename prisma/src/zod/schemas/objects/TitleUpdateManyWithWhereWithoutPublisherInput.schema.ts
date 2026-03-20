import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleScalarWhereInputObjectSchema as TitleScalarWhereInputObjectSchema } from './TitleScalarWhereInput.schema';
import { TitleUpdateManyMutationInputObjectSchema as TitleUpdateManyMutationInputObjectSchema } from './TitleUpdateManyMutationInput.schema';
import { TitleUncheckedUpdateManyWithoutPublisherInputObjectSchema as TitleUncheckedUpdateManyWithoutPublisherInputObjectSchema } from './TitleUncheckedUpdateManyWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TitleUpdateManyMutationInputObjectSchema), z.lazy(() => TitleUncheckedUpdateManyWithoutPublisherInputObjectSchema)])
}).strict();
export const TitleUpdateManyWithWhereWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TitleUpdateManyWithWhereWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateManyWithWhereWithoutPublisherInput>;
export const TitleUpdateManyWithWhereWithoutPublisherInputObjectZodSchema = makeSchema();
