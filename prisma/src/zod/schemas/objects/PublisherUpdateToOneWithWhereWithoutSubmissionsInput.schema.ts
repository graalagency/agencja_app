import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutSubmissionsInputObjectSchema as PublisherUpdateWithoutSubmissionsInputObjectSchema } from './PublisherUpdateWithoutSubmissionsInput.schema';
import { PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema as PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './PublisherUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutSubmissionsInput>;
export const PublisherUpdateToOneWithWhereWithoutSubmissionsInputObjectZodSchema = makeSchema();
