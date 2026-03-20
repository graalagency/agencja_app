import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutTitleInputObjectSchema as PublisherUpdateWithoutTitleInputObjectSchema } from './PublisherUpdateWithoutTitleInput.schema';
import { PublisherUncheckedUpdateWithoutTitleInputObjectSchema as PublisherUncheckedUpdateWithoutTitleInputObjectSchema } from './PublisherUncheckedUpdateWithoutTitleInput.schema';
import { PublisherCreateWithoutTitleInputObjectSchema as PublisherCreateWithoutTitleInputObjectSchema } from './PublisherCreateWithoutTitleInput.schema';
import { PublisherUncheckedCreateWithoutTitleInputObjectSchema as PublisherUncheckedCreateWithoutTitleInputObjectSchema } from './PublisherUncheckedCreateWithoutTitleInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTitleInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTitleInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutTitleInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutTitleInput>;
export const PublisherUpsertWithoutTitleInputObjectZodSchema = makeSchema();
