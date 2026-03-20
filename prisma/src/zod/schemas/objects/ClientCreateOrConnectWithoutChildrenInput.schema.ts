import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutChildrenInputObjectSchema as ClientCreateWithoutChildrenInputObjectSchema } from './ClientCreateWithoutChildrenInput.schema';
import { ClientUncheckedCreateWithoutChildrenInputObjectSchema as ClientUncheckedCreateWithoutChildrenInputObjectSchema } from './ClientUncheckedCreateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutChildrenInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutChildrenInput>;
export const ClientCreateOrConnectWithoutChildrenInputObjectZodSchema = makeSchema();
