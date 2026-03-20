import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutChildrenInputObjectSchema as PublisherUpdateWithoutChildrenInputObjectSchema } from './PublisherUpdateWithoutChildrenInput.schema';
import { PublisherUncheckedUpdateWithoutChildrenInputObjectSchema as PublisherUncheckedUpdateWithoutChildrenInputObjectSchema } from './PublisherUncheckedUpdateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutChildrenInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutChildrenInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutChildrenInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutChildrenInput>;
export const PublisherUpdateToOneWithWhereWithoutChildrenInputObjectZodSchema = makeSchema();
