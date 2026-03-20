import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutPublisherContactInputObjectSchema as PublisherCreateWithoutPublisherContactInputObjectSchema } from './PublisherCreateWithoutPublisherContactInput.schema';
import { PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema as PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedCreateWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutPublisherContactInput>;
export const PublisherCreateOrConnectWithoutPublisherContactInputObjectZodSchema = makeSchema();
