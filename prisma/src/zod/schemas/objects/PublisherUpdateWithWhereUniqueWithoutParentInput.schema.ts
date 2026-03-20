import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateWithoutParentInputObjectSchema as PublisherUpdateWithoutParentInputObjectSchema } from './PublisherUpdateWithoutParentInput.schema';
import { PublisherUncheckedUpdateWithoutParentInputObjectSchema as PublisherUncheckedUpdateWithoutParentInputObjectSchema } from './PublisherUncheckedUpdateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PublisherUpdateWithoutParentInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutParentInputObjectSchema)])
}).strict();
export const PublisherUpdateWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.PublisherUpdateWithWhereUniqueWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateWithWhereUniqueWithoutParentInput>;
export const PublisherUpdateWithWhereUniqueWithoutParentInputObjectZodSchema = makeSchema();
