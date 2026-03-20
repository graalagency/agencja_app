import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutTitleInputObjectSchema as PublisherCreateWithoutTitleInputObjectSchema } from './PublisherCreateWithoutTitleInput.schema';
import { PublisherUncheckedCreateWithoutTitleInputObjectSchema as PublisherUncheckedCreateWithoutTitleInputObjectSchema } from './PublisherUncheckedCreateWithoutTitleInput.schema';
import { PublisherCreateOrConnectWithoutTitleInputObjectSchema as PublisherCreateOrConnectWithoutTitleInputObjectSchema } from './PublisherCreateOrConnectWithoutTitleInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTitleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutTitleInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutTitleInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutTitleInput>;
export const PublisherCreateNestedOneWithoutTitleInputObjectZodSchema = makeSchema();
