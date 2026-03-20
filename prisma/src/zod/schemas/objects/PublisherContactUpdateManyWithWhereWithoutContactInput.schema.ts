import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactScalarWhereInputObjectSchema as PublisherContactScalarWhereInputObjectSchema } from './PublisherContactScalarWhereInput.schema';
import { PublisherContactUpdateManyMutationInputObjectSchema as PublisherContactUpdateManyMutationInputObjectSchema } from './PublisherContactUpdateManyMutationInput.schema';
import { PublisherContactUncheckedUpdateManyWithoutContactInputObjectSchema as PublisherContactUncheckedUpdateManyWithoutContactInputObjectSchema } from './PublisherContactUncheckedUpdateManyWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherContactScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PublisherContactUpdateManyMutationInputObjectSchema), z.lazy(() => PublisherContactUncheckedUpdateManyWithoutContactInputObjectSchema)])
}).strict();
export const PublisherContactUpdateManyWithWhereWithoutContactInputObjectSchema: z.ZodType<Prisma.PublisherContactUpdateManyWithWhereWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactUpdateManyWithWhereWithoutContactInput>;
export const PublisherContactUpdateManyWithWhereWithoutContactInputObjectZodSchema = makeSchema();
