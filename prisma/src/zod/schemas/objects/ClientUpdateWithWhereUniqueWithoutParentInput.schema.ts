import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutParentInputObjectSchema as ClientUpdateWithoutParentInputObjectSchema } from './ClientUpdateWithoutParentInput.schema';
import { ClientUncheckedUpdateWithoutParentInputObjectSchema as ClientUncheckedUpdateWithoutParentInputObjectSchema } from './ClientUncheckedUpdateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientUpdateWithoutParentInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutParentInputObjectSchema)])
}).strict();
export const ClientUpdateWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.ClientUpdateWithWhereUniqueWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateWithWhereUniqueWithoutParentInput>;
export const ClientUpdateWithWhereUniqueWithoutParentInputObjectZodSchema = makeSchema();
