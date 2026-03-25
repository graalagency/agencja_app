import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutSubmissionsInputObjectSchema as PublisherCreateWithoutSubmissionsInputObjectSchema } from './PublisherCreateWithoutSubmissionsInput.schema';
import { PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema as PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedCreateWithoutSubmissionsInput.schema';
import { PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema as PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema } from './PublisherCreateOrConnectWithoutSubmissionsInput.schema';
import { PublisherUpsertWithoutSubmissionsInputObjectSchema as PublisherUpsertWithoutSubmissionsInputObjectSchema } from './PublisherUpsertWithoutSubmissionsInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema as PublisherUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutSubmissionsInput.schema';
import { PublisherUpdateWithoutSubmissionsInputObjectSchema as PublisherUpdateWithoutSubmissionsInputObjectSchema } from './PublisherUpdateWithoutSubmissionsInput.schema';
import { PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema as PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneWithoutSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneWithoutSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneWithoutSubmissionsNestedInput>;
export const PublisherUpdateOneWithoutSubmissionsNestedInputObjectZodSchema = makeSchema();
