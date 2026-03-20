import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientScalarWhereInputObjectSchema as ClientScalarWhereInputObjectSchema } from './ClientScalarWhereInput.schema';
import { ClientUpdateManyMutationInputObjectSchema as ClientUpdateManyMutationInputObjectSchema } from './ClientUpdateManyMutationInput.schema';
import { ClientUncheckedUpdateManyWithoutParentInputObjectSchema as ClientUncheckedUpdateManyWithoutParentInputObjectSchema } from './ClientUncheckedUpdateManyWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientUpdateManyMutationInputObjectSchema), z.lazy(() => ClientUncheckedUpdateManyWithoutParentInputObjectSchema)])
}).strict();
export const ClientUpdateManyWithWhereWithoutParentInputObjectSchema: z.ZodType<Prisma.ClientUpdateManyWithWhereWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateManyWithWhereWithoutParentInput>;
export const ClientUpdateManyWithWhereWithoutParentInputObjectZodSchema = makeSchema();
