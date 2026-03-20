import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutChildrenInputObjectSchema as ClientUpdateWithoutChildrenInputObjectSchema } from './ClientUpdateWithoutChildrenInput.schema';
import { ClientUncheckedUpdateWithoutChildrenInputObjectSchema as ClientUncheckedUpdateWithoutChildrenInputObjectSchema } from './ClientUncheckedUpdateWithoutChildrenInput.schema';
import { ClientCreateWithoutChildrenInputObjectSchema as ClientCreateWithoutChildrenInputObjectSchema } from './ClientCreateWithoutChildrenInput.schema';
import { ClientUncheckedCreateWithoutChildrenInputObjectSchema as ClientUncheckedCreateWithoutChildrenInputObjectSchema } from './ClientUncheckedCreateWithoutChildrenInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutChildrenInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutChildrenInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutChildrenInput>;
export const ClientUpsertWithoutChildrenInputObjectZodSchema = makeSchema();
