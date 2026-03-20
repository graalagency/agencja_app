import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutTitleInputObjectSchema as ClientCreateWithoutTitleInputObjectSchema } from './ClientCreateWithoutTitleInput.schema';
import { ClientUncheckedCreateWithoutTitleInputObjectSchema as ClientUncheckedCreateWithoutTitleInputObjectSchema } from './ClientUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutTitleInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutTitleInput>;
export const ClientCreateOrConnectWithoutTitleInputObjectZodSchema = makeSchema();
