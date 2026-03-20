import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutTitleInputObjectSchema as ClientCreateWithoutTitleInputObjectSchema } from './ClientCreateWithoutTitleInput.schema';
import { ClientUncheckedCreateWithoutTitleInputObjectSchema as ClientUncheckedCreateWithoutTitleInputObjectSchema } from './ClientUncheckedCreateWithoutTitleInput.schema';
import { ClientCreateOrConnectWithoutTitleInputObjectSchema as ClientCreateOrConnectWithoutTitleInputObjectSchema } from './ClientCreateOrConnectWithoutTitleInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTitleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutTitleInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutTitleInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutTitleInput>;
export const ClientCreateNestedOneWithoutTitleInputObjectZodSchema = makeSchema();
