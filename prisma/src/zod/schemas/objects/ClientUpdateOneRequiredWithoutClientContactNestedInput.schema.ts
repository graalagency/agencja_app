import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutClientContactInputObjectSchema as ClientCreateWithoutClientContactInputObjectSchema } from './ClientCreateWithoutClientContactInput.schema';
import { ClientUncheckedCreateWithoutClientContactInputObjectSchema as ClientUncheckedCreateWithoutClientContactInputObjectSchema } from './ClientUncheckedCreateWithoutClientContactInput.schema';
import { ClientCreateOrConnectWithoutClientContactInputObjectSchema as ClientCreateOrConnectWithoutClientContactInputObjectSchema } from './ClientCreateOrConnectWithoutClientContactInput.schema';
import { ClientUpsertWithoutClientContactInputObjectSchema as ClientUpsertWithoutClientContactInputObjectSchema } from './ClientUpsertWithoutClientContactInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutClientContactInputObjectSchema as ClientUpdateToOneWithWhereWithoutClientContactInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutClientContactInput.schema';
import { ClientUpdateWithoutClientContactInputObjectSchema as ClientUpdateWithoutClientContactInputObjectSchema } from './ClientUpdateWithoutClientContactInput.schema';
import { ClientUncheckedUpdateWithoutClientContactInputObjectSchema as ClientUncheckedUpdateWithoutClientContactInputObjectSchema } from './ClientUncheckedUpdateWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutClientContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutClientContactInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutClientContactInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutClientContactInputObjectSchema), z.lazy(() => ClientUpdateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutClientContactInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutClientContactNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutClientContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutClientContactNestedInput>;
export const ClientUpdateOneRequiredWithoutClientContactNestedInputObjectZodSchema = makeSchema();
