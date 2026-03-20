import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactCreateWithoutContactInputObjectSchema as PublisherContactCreateWithoutContactInputObjectSchema } from './PublisherContactCreateWithoutContactInput.schema';
import { PublisherContactUncheckedCreateWithoutContactInputObjectSchema as PublisherContactUncheckedCreateWithoutContactInputObjectSchema } from './PublisherContactUncheckedCreateWithoutContactInput.schema';
import { PublisherContactCreateOrConnectWithoutContactInputObjectSchema as PublisherContactCreateOrConnectWithoutContactInputObjectSchema } from './PublisherContactCreateOrConnectWithoutContactInput.schema';
import { PublisherContactCreateManyContactInputEnvelopeObjectSchema as PublisherContactCreateManyContactInputEnvelopeObjectSchema } from './PublisherContactCreateManyContactInputEnvelope.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherContactCreateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactCreateWithoutContactInputObjectSchema).array(), z.lazy(() => PublisherContactUncheckedCreateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutContactInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublisherContactCreateOrConnectWithoutContactInputObjectSchema), z.lazy(() => PublisherContactCreateOrConnectWithoutContactInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublisherContactCreateManyContactInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PublisherContactWhereUniqueInputObjectSchema), z.lazy(() => PublisherContactWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PublisherContactCreateNestedManyWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactCreateNestedManyWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactCreateNestedManyWithoutContactInput>;
export const PublisherContactCreateNestedManyWithoutContactInputObjectZodSchema = makeSchema();
