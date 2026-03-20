import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactScalarWhereInputObjectSchema as PublisherContactScalarWhereInputObjectSchema } from './PublisherContactScalarWhereInput.schema';
import { PublisherContactUpdateManyMutationInputObjectSchema as PublisherContactUpdateManyMutationInputObjectSchema } from './PublisherContactUpdateManyMutationInput.schema';
import { PublisherContactUncheckedUpdateManyWithoutPublisherInputObjectSchema as PublisherContactUncheckedUpdateManyWithoutPublisherInputObjectSchema } from './PublisherContactUncheckedUpdateManyWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PublisherContactUpdateManyMutationInputObjectSchema), z.lazy(() => PublisherContactUncheckedUpdateManyWithoutPublisherInputObjectSchema)])
}).strict();
export const PublisherContactUpdateManyWithWhereWithoutPublisherInputObjectSchema: z.ZodType<Prisma.PublisherContactUpdateManyWithWhereWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpdateManyWithWhereWithoutPublisherInput>;
export const PublisherContactUpdateManyWithWhereWithoutPublisherInputObjectZodSchema = makeSchema();
