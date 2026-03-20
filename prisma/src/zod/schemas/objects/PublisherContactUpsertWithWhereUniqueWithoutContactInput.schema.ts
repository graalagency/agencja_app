import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactUpdateWithoutContactInputObjectSchema as PublisherContactUpdateWithoutContactInputObjectSchema } from './PublisherContactUpdateWithoutContactInput.schema';
import { PublisherContactUncheckedUpdateWithoutContactInputObjectSchema as PublisherContactUncheckedUpdateWithoutContactInputObjectSchema } from './PublisherContactUncheckedUpdateWithoutContactInput.schema';
import { PublisherContactCreateWithoutContactInputObjectSchema as PublisherContactCreateWithoutContactInputObjectSchema } from './PublisherContactCreateWithoutContactInput.schema';
import { PublisherContactUncheckedCreateWithoutContactInputObjectSchema as PublisherContactUncheckedCreateWithoutContactInputObjectSchema } from './PublisherContactUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PublisherContactUpdateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUncheckedUpdateWithoutContactInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherContactCreateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const PublisherContactUpsertWithWhereUniqueWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactUpsertWithWhereUniqueWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpsertWithWhereUniqueWithoutContactInput>;
export const PublisherContactUpsertWithWhereUniqueWithoutContactInputObjectZodSchema = makeSchema();
