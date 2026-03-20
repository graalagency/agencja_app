import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateWithoutParentInputObjectSchema as PublisherUpdateWithoutParentInputObjectSchema } from './PublisherUpdateWithoutParentInput.schema';
import { PublisherUncheckedUpdateWithoutParentInputObjectSchema as PublisherUncheckedUpdateWithoutParentInputObjectSchema } from './PublisherUncheckedUpdateWithoutParentInput.schema';
import { PublisherCreateWithoutParentInputObjectSchema as PublisherCreateWithoutParentInputObjectSchema } from './PublisherCreateWithoutParentInput.schema';
import { PublisherUncheckedCreateWithoutParentInputObjectSchema as PublisherUncheckedCreateWithoutParentInputObjectSchema } from './PublisherUncheckedCreateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PublisherUpdateWithoutParentInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutParentInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutParentInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const PublisherUpsertWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithWhereUniqueWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithWhereUniqueWithoutParentInput>;
export const PublisherUpsertWithWhereUniqueWithoutParentInputObjectZodSchema = makeSchema();
