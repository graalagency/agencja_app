import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutClientContactInputObjectSchema as ClientCreateWithoutClientContactInputObjectSchema } from './ClientCreateWithoutClientContactInput.schema';
import { ClientUncheckedCreateWithoutClientContactInputObjectSchema as ClientUncheckedCreateWithoutClientContactInputObjectSchema } from './ClientUncheckedCreateWithoutClientContactInput.schema';
import { ClientCreateOrConnectWithoutClientContactInputObjectSchema as ClientCreateOrConnectWithoutClientContactInputObjectSchema } from './ClientCreateOrConnectWithoutClientContactInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutClientContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutClientContactInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutClientContactInput>;
export const ClientCreateNestedOneWithoutClientContactInputObjectZodSchema = makeSchema();
