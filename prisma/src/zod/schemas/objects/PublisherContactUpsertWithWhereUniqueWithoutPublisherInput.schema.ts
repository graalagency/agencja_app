import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactUpdateWithoutPublisherInputObjectSchema as PublisherContactUpdateWithoutPublisherInputObjectSchema } from './PublisherContactUpdateWithoutPublisherInput.schema';
import { PublisherContactUncheckedUpdateWithoutPublisherInputObjectSchema as PublisherContactUncheckedUpdateWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedUpdateWithoutPublisherInput.schema';
import { PublisherContactCreateWithoutPublisherInputObjectSchema as PublisherContactCreateWithoutPublisherInputObjectSchema } from './PublisherContactCreateWithoutPublisherInput.schema';
import { PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema as PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PublisherContactUpdateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUncheckedUpdateWithoutPublisherInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherContactCreateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const PublisherContactUpsertWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactUpsertWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpsertWithWhereUniqueWithoutPublisherInput>;
export const PublisherContactUpsertWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
