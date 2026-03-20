import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutChildrenInputObjectSchema as PublisherCreateWithoutChildrenInputObjectSchema } from './PublisherCreateWithoutChildrenInput.schema';
import { PublisherUncheckedCreateWithoutChildrenInputObjectSchema as PublisherUncheckedCreateWithoutChildrenInputObjectSchema } from './PublisherUncheckedCreateWithoutChildrenInput.schema';
import { PublisherCreateOrConnectWithoutChildrenInputObjectSchema as PublisherCreateOrConnectWithoutChildrenInputObjectSchema } from './PublisherCreateOrConnectWithoutChildrenInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutChildrenInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutChildrenInput>;
export const PublisherCreateNestedOneWithoutChildrenInputObjectZodSchema = makeSchema();
