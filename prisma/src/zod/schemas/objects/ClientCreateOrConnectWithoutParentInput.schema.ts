import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutParentInputObjectSchema as ClientCreateWithoutParentInputObjectSchema } from './ClientCreateWithoutParentInput.schema';
import { ClientUncheckedCreateWithoutParentInputObjectSchema as ClientUncheckedCreateWithoutParentInputObjectSchema } from './ClientUncheckedCreateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutParentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutParentInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutParentInput>;
export const ClientCreateOrConnectWithoutParentInputObjectZodSchema = makeSchema();
