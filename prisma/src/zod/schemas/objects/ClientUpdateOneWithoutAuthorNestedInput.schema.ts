import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutAuthorInputObjectSchema as ClientCreateWithoutAuthorInputObjectSchema } from './ClientCreateWithoutAuthorInput.schema';
import { ClientUncheckedCreateWithoutAuthorInputObjectSchema as ClientUncheckedCreateWithoutAuthorInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorInput.schema';
import { ClientCreateOrConnectWithoutAuthorInputObjectSchema as ClientCreateOrConnectWithoutAuthorInputObjectSchema } from './ClientCreateOrConnectWithoutAuthorInput.schema';
import { ClientUpsertWithoutAuthorInputObjectSchema as ClientUpsertWithoutAuthorInputObjectSchema } from './ClientUpsertWithoutAuthorInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutAuthorInputObjectSchema as ClientUpdateToOneWithWhereWithoutAuthorInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutAuthorInput.schema';
import { ClientUpdateWithoutAuthorInputObjectSchema as ClientUpdateWithoutAuthorInputObjectSchema } from './ClientUpdateWithoutAuthorInput.schema';
import { ClientUncheckedUpdateWithoutAuthorInputObjectSchema as ClientUncheckedUpdateWithoutAuthorInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAuthorInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutAuthorInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutAuthorInputObjectSchema), z.lazy(() => ClientUpdateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthorInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutAuthorNestedInput>;
export const ClientUpdateOneWithoutAuthorNestedInputObjectZodSchema = makeSchema();
