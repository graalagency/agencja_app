import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutChildrenInputObjectSchema as ClientCreateWithoutChildrenInputObjectSchema } from './ClientCreateWithoutChildrenInput.schema';
import { ClientUncheckedCreateWithoutChildrenInputObjectSchema as ClientUncheckedCreateWithoutChildrenInputObjectSchema } from './ClientUncheckedCreateWithoutChildrenInput.schema';
import { ClientCreateOrConnectWithoutChildrenInputObjectSchema as ClientCreateOrConnectWithoutChildrenInputObjectSchema } from './ClientCreateOrConnectWithoutChildrenInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutChildrenInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutChildrenInput>;
export const ClientCreateNestedOneWithoutChildrenInputObjectZodSchema = makeSchema();
