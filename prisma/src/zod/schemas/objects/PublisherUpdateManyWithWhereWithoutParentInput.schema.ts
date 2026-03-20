import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherScalarWhereInputObjectSchema as PublisherScalarWhereInputObjectSchema } from './PublisherScalarWhereInput.schema';
import { PublisherUpdateManyMutationInputObjectSchema as PublisherUpdateManyMutationInputObjectSchema } from './PublisherUpdateManyMutationInput.schema';
import { PublisherUncheckedUpdateManyWithoutParentInputObjectSchema as PublisherUncheckedUpdateManyWithoutParentInputObjectSchema } from './PublisherUncheckedUpdateManyWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PublisherUpdateManyMutationInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateManyWithoutParentInputObjectSchema)])
}).strict();
export const PublisherUpdateManyWithWhereWithoutParentInputObjectSchema: z.ZodType<Prisma.PublisherUpdateManyWithWhereWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateManyWithWhereWithoutParentInput>;
export const PublisherUpdateManyWithWhereWithoutParentInputObjectZodSchema = makeSchema();
