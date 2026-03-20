import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutTitleInputObjectSchema as PublisherUpdateWithoutTitleInputObjectSchema } from './PublisherUpdateWithoutTitleInput.schema';
import { PublisherUncheckedUpdateWithoutTitleInputObjectSchema as PublisherUncheckedUpdateWithoutTitleInputObjectSchema } from './PublisherUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutTitleInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTitleInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutTitleInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutTitleInput>;
export const PublisherUpdateToOneWithWhereWithoutTitleInputObjectZodSchema = makeSchema();
