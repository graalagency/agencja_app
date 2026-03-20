import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutChildrenInputObjectSchema as PublisherCreateWithoutChildrenInputObjectSchema } from './PublisherCreateWithoutChildrenInput.schema';
import { PublisherUncheckedCreateWithoutChildrenInputObjectSchema as PublisherUncheckedCreateWithoutChildrenInputObjectSchema } from './PublisherUncheckedCreateWithoutChildrenInput.schema';
import { PublisherCreateOrConnectWithoutChildrenInputObjectSchema as PublisherCreateOrConnectWithoutChildrenInputObjectSchema } from './PublisherCreateOrConnectWithoutChildrenInput.schema';
import { PublisherUpsertWithoutChildrenInputObjectSchema as PublisherUpsertWithoutChildrenInputObjectSchema } from './PublisherUpsertWithoutChildrenInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutChildrenInputObjectSchema as PublisherUpdateToOneWithWhereWithoutChildrenInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutChildrenInput.schema';
import { PublisherUpdateWithoutChildrenInputObjectSchema as PublisherUpdateWithoutChildrenInputObjectSchema } from './PublisherUpdateWithoutChildrenInput.schema';
import { PublisherUncheckedUpdateWithoutChildrenInputObjectSchema as PublisherUncheckedUpdateWithoutChildrenInputObjectSchema } from './PublisherUncheckedUpdateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutChildrenInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUpdateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutChildrenInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneWithoutChildrenNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneWithoutChildrenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneWithoutChildrenNestedInput>;
export const PublisherUpdateOneWithoutChildrenNestedInputObjectZodSchema = makeSchema();
