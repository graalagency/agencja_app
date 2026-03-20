import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutChildrenInputObjectSchema as PublisherCreateWithoutChildrenInputObjectSchema } from './PublisherCreateWithoutChildrenInput.schema';
import { PublisherUncheckedCreateWithoutChildrenInputObjectSchema as PublisherUncheckedCreateWithoutChildrenInputObjectSchema } from './PublisherUncheckedCreateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutChildrenInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutChildrenInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutChildrenInput>;
export const PublisherCreateOrConnectWithoutChildrenInputObjectZodSchema = makeSchema();
