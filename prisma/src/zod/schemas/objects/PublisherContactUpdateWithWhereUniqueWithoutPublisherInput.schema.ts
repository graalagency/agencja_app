import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './PublisherContactWhereUniqueInput.schema';
import { PublisherContactUpdateWithoutPublisherInputObjectSchema as PublisherContactUpdateWithoutPublisherInputObjectSchema } from './PublisherContactUpdateWithoutPublisherInput.schema';
import { PublisherContactUncheckedUpdateWithoutPublisherInputObjectSchema as PublisherContactUncheckedUpdateWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedUpdateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PublisherContactUpdateWithoutPublisherInputObjectSchema), z.lazy(() => PublisherContactUncheckedUpdateWithoutPublisherInputObjectSchema)])
}).strict();
export const PublisherContactUpdateWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactUpdateWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpdateWithWhereUniqueWithoutPublisherInput>;
export const PublisherContactUpdateWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
