import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactCreateWithoutPublisherInputObjectSchema as PublisherContactCreateWithoutPublisherInputObjectSchema } from './PublisherContactCreateWithoutPublisherInput.schema';
import { PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema as PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedCreateWithoutPublisherInput.schema';
import { PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema as PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema } from './PublisherContactCreateOrConnectWithoutPublisherInput.schema';
import { PublisherContactCreateManyPublisherInputEnvelopeObjectSchema as PublisherContactCreateManyPublisherInputEnvelopeObjectSchema } from './PublisherContactCreateManyPublisherInputEnvelope.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherContactCreateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublisherContactCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PublisherContactCreateNestedManyWithoutPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateNestedManyWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateNestedManyWithoutPublisherInput>;
export const PublisherContactCreateNestedManyWithoutPublisherInputObjectZodSchema = makeSchema();
