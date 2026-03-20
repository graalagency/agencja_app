import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactCreateWithoutContactInputObjectSchema as PublisherContactCreateWithoutContactInputObjectSchema } from './PublisherContactCreateWithoutContactInput.schema';
import { PublisherContactUncheckedCreateWithoutContactInputObjectSchema as PublisherContactUncheckedCreateWithoutContactInputObjectSchema } from './PublisherContactUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherContactCreateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const PublisherContactCreateOrConnectWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateOrConnectWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateOrConnectWithoutContactInput>;
export const PublisherContactCreateOrConnectWithoutContactInputObjectZodSchema = makeSchema();
