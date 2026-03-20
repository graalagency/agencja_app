import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactCreateWithoutPublisherInputObjectSchema as PublisherContactCreateWithoutPublisherInputObjectSchema } from './PublisherContactCreateWithoutPublisherInput.schema';
import { PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema as PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherContactCreateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateOrConnectWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateOrConnectWithoutPublisherInput>;
export const PublisherContactCreateOrConnectWithoutPublisherInputObjectZodSchema = makeSchema();
