import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutTitleInputObjectSchema as PublisherCreateWithoutTitleInputObjectSchema } from './PublisherCreateWithoutTitleInput.schema';
import { PublisherUncheckedCreateWithoutTitleInputObjectSchema as PublisherUncheckedCreateWithoutTitleInputObjectSchema } from './PublisherUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutTitleInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutTitleInput>;
export const PublisherCreateOrConnectWithoutTitleInputObjectZodSchema = makeSchema();
