import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutParentInputObjectSchema as PublisherCreateWithoutParentInputObjectSchema } from './PublisherCreateWithoutParentInput.schema';
import { PublisherUncheckedCreateWithoutParentInputObjectSchema as PublisherUncheckedCreateWithoutParentInputObjectSchema } from './PublisherUncheckedCreateWithoutParentInput.schema';
import { PublisherCreateOrConnectWithoutParentInputObjectSchema as PublisherCreateOrConnectWithoutParentInputObjectSchema } from './PublisherCreateOrConnectWithoutParentInput.schema';
import { PublisherCreateManyParentInputEnvelopeObjectSchema as PublisherCreateManyParentInputEnvelopeObjectSchema } from './PublisherCreateManyParentInputEnvelope.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutParentInputObjectSchema), z.lazy(() => PublisherCreateWithoutParentInputObjectSchema).array(), z.lazy(() => PublisherUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublisherCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => PublisherCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublisherCreateManyParentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PublisherWhereUniqueInputObjectSchema), z.lazy(() => PublisherWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PublisherCreateNestedManyWithoutParentInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedManyWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedManyWithoutParentInput>;
export const PublisherCreateNestedManyWithoutParentInputObjectZodSchema = makeSchema();
