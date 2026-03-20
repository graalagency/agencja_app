import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutPublisherContactInputObjectSchema as PublisherCreateWithoutPublisherContactInputObjectSchema } from './PublisherCreateWithoutPublisherContactInput.schema';
import { PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema as PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedCreateWithoutPublisherContactInput.schema';
import { PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema as PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema } from './PublisherCreateOrConnectWithoutPublisherContactInput.schema';
import { PublisherUpsertWithoutPublisherContactInputObjectSchema as PublisherUpsertWithoutPublisherContactInputObjectSchema } from './PublisherUpsertWithoutPublisherContactInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema as PublisherUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutPublisherContactInput.schema';
import { PublisherUpdateWithoutPublisherContactInputObjectSchema as PublisherUpdateWithoutPublisherContactInputObjectSchema } from './PublisherUpdateWithoutPublisherContactInput.schema';
import { PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema as PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedUpdateWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutPublisherContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutPublisherContactInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutPublisherContactInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUpdateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneRequiredWithoutPublisherContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneRequiredWithoutPublisherContactNestedInput>;
export const PublisherUpdateOneRequiredWithoutPublisherContactNestedInputObjectZodSchema = makeSchema();
