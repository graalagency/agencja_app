import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactUpdateWithoutContactInputObjectSchema as PublisherContactUpdateWithoutContactInputObjectSchema } from './PublisherContactUpdateWithoutContactInput.schema';
import { PublisherContactUncheckedUpdateWithoutContactInputObjectSchema as PublisherContactUncheckedUpdateWithoutContactInputObjectSchema } from './PublisherContactUncheckedUpdateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PublisherContactUpdateWithoutContactInputObjectSchema), z.lazy(() => PublisherContactUncheckedUpdateWithoutContactInputObjectSchema)])
}).strict();
export const PublisherContactUpdateWithWhereUniqueWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactUpdateWithWhereUniqueWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpdateWithWhereUniqueWithoutContactInput>;
export const PublisherContactUpdateWithWhereUniqueWithoutContactInputObjectZodSchema = makeSchema();
