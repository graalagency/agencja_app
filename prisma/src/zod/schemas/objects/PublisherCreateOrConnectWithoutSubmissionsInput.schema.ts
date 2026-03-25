import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutSubmissionsInputObjectSchema as PublisherCreateWithoutSubmissionsInputObjectSchema } from './PublisherCreateWithoutSubmissionsInput.schema';
import { PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema as PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedCreateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutSubmissionsInput>;
export const PublisherCreateOrConnectWithoutSubmissionsInputObjectZodSchema = makeSchema();
