import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutSubmissionsInputObjectSchema as PublisherUpdateWithoutSubmissionsInputObjectSchema } from './PublisherUpdateWithoutSubmissionsInput.schema';
import { PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema as PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedUpdateWithoutSubmissionsInput.schema';
import { PublisherCreateWithoutSubmissionsInputObjectSchema as PublisherCreateWithoutSubmissionsInputObjectSchema } from './PublisherCreateWithoutSubmissionsInput.schema';
import { PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema as PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedCreateWithoutSubmissionsInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutSubmissionsInput>;
export const PublisherUpsertWithoutSubmissionsInputObjectZodSchema = makeSchema();
