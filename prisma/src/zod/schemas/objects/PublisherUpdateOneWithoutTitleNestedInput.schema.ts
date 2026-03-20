import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutTitleInputObjectSchema as PublisherCreateWithoutTitleInputObjectSchema } from './PublisherCreateWithoutTitleInput.schema';
import { PublisherUncheckedCreateWithoutTitleInputObjectSchema as PublisherUncheckedCreateWithoutTitleInputObjectSchema } from './PublisherUncheckedCreateWithoutTitleInput.schema';
import { PublisherCreateOrConnectWithoutTitleInputObjectSchema as PublisherCreateOrConnectWithoutTitleInputObjectSchema } from './PublisherCreateOrConnectWithoutTitleInput.schema';
import { PublisherUpsertWithoutTitleInputObjectSchema as PublisherUpsertWithoutTitleInputObjectSchema } from './PublisherUpsertWithoutTitleInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutTitleInputObjectSchema as PublisherUpdateToOneWithWhereWithoutTitleInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutTitleInput.schema';
import { PublisherUpdateWithoutTitleInputObjectSchema as PublisherUpdateWithoutTitleInputObjectSchema } from './PublisherUpdateWithoutTitleInput.schema';
import { PublisherUncheckedUpdateWithoutTitleInputObjectSchema as PublisherUncheckedUpdateWithoutTitleInputObjectSchema } from './PublisherUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTitleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutTitleInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutTitleInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutTitleInputObjectSchema), z.lazy(() => PublisherUpdateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTitleInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneWithoutTitleNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneWithoutTitleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneWithoutTitleNestedInput>;
export const PublisherUpdateOneWithoutTitleNestedInputObjectZodSchema = makeSchema();
