import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutChildrenInputObjectSchema as PublisherUpdateWithoutChildrenInputObjectSchema } from './PublisherUpdateWithoutChildrenInput.schema';
import { PublisherUncheckedUpdateWithoutChildrenInputObjectSchema as PublisherUncheckedUpdateWithoutChildrenInputObjectSchema } from './PublisherUncheckedUpdateWithoutChildrenInput.schema';
import { PublisherCreateWithoutChildrenInputObjectSchema as PublisherCreateWithoutChildrenInputObjectSchema } from './PublisherCreateWithoutChildrenInput.schema';
import { PublisherUncheckedCreateWithoutChildrenInputObjectSchema as PublisherUncheckedCreateWithoutChildrenInputObjectSchema } from './PublisherUncheckedCreateWithoutChildrenInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutChildrenInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutChildrenInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutChildrenInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutChildrenInput>;
export const PublisherUpsertWithoutChildrenInputObjectZodSchema = makeSchema();
