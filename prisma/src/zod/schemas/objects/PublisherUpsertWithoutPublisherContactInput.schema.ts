import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutPublisherContactInputObjectSchema as PublisherUpdateWithoutPublisherContactInputObjectSchema } from './PublisherUpdateWithoutPublisherContactInput.schema';
import { PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema as PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedUpdateWithoutPublisherContactInput.schema';
import { PublisherCreateWithoutPublisherContactInputObjectSchema as PublisherCreateWithoutPublisherContactInputObjectSchema } from './PublisherCreateWithoutPublisherContactInput.schema';
import { PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema as PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedCreateWithoutPublisherContactInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutPublisherContactInput>;
export const PublisherUpsertWithoutPublisherContactInputObjectZodSchema = makeSchema();
