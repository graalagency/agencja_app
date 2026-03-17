import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutContactInputObjectSchema as ClientCreateWithoutContactInputObjectSchema } from './ClientCreateWithoutContactInput.schema';
import { ClientUncheckedCreateWithoutContactInputObjectSchema as ClientUncheckedCreateWithoutContactInputObjectSchema } from './ClientUncheckedCreateWithoutContactInput.schema';
import { ClientCreateOrConnectWithoutContactInputObjectSchema as ClientCreateOrConnectWithoutContactInputObjectSchema } from './ClientCreateOrConnectWithoutContactInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutContactInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutContactInput>;
export const ClientCreateNestedOneWithoutContactInputObjectZodSchema = makeSchema();
