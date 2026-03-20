import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutChildrenInputObjectSchema as ClientUpdateWithoutChildrenInputObjectSchema } from './ClientUpdateWithoutChildrenInput.schema';
import { ClientUncheckedUpdateWithoutChildrenInputObjectSchema as ClientUncheckedUpdateWithoutChildrenInputObjectSchema } from './ClientUncheckedUpdateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutChildrenInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutChildrenInput>;
export const ClientUpdateToOneWithWhereWithoutChildrenInputObjectZodSchema = makeSchema();
