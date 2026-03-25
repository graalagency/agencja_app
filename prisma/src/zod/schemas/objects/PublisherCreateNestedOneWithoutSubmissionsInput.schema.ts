import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutSubmissionsInputObjectSchema as PublisherCreateWithoutSubmissionsInputObjectSchema } from './PublisherCreateWithoutSubmissionsInput.schema';
import { PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema as PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedCreateWithoutSubmissionsInput.schema';
import { PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema as PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema } from './PublisherCreateOrConnectWithoutSubmissionsInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutSubmissionsInput>;
export const PublisherCreateNestedOneWithoutSubmissionsInputObjectZodSchema = makeSchema();
