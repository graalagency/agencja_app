import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutPublisherContactInputObjectSchema as PublisherCreateWithoutPublisherContactInputObjectSchema } from './PublisherCreateWithoutPublisherContactInput.schema';
import { PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema as PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedCreateWithoutPublisherContactInput.schema';
import { PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema as PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema } from './PublisherCreateOrConnectWithoutPublisherContactInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutPublisherContactInput>;
export const PublisherCreateNestedOneWithoutPublisherContactInputObjectZodSchema = makeSchema();
