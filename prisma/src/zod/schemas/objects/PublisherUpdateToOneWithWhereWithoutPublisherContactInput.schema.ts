import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutPublisherContactInputObjectSchema as PublisherUpdateWithoutPublisherContactInputObjectSchema } from './PublisherUpdateWithoutPublisherContactInput.schema';
import { PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema as PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema } from './PublisherUncheckedUpdateWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutPublisherContactInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutPublisherContactInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutPublisherContactInput>;
export const PublisherUpdateToOneWithWhereWithoutPublisherContactInputObjectZodSchema = makeSchema();
