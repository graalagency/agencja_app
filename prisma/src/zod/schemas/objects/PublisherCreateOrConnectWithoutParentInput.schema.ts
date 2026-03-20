import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutParentInputObjectSchema as PublisherCreateWithoutParentInputObjectSchema } from './PublisherCreateWithoutParentInput.schema';
import { PublisherUncheckedCreateWithoutParentInputObjectSchema as PublisherUncheckedCreateWithoutParentInputObjectSchema } from './PublisherUncheckedCreateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutParentInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutParentInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutParentInput>;
export const PublisherCreateOrConnectWithoutParentInputObjectZodSchema = makeSchema();
