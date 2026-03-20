import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutTitleInputObjectSchema as ClientUpdateWithoutTitleInputObjectSchema } from './ClientUpdateWithoutTitleInput.schema';
import { ClientUncheckedUpdateWithoutTitleInputObjectSchema as ClientUncheckedUpdateWithoutTitleInputObjectSchema } from './ClientUncheckedUpdateWithoutTitleInput.schema';
import { ClientCreateWithoutTitleInputObjectSchema as ClientCreateWithoutTitleInputObjectSchema } from './ClientCreateWithoutTitleInput.schema';
import { ClientUncheckedCreateWithoutTitleInputObjectSchema as ClientUncheckedCreateWithoutTitleInputObjectSchema } from './ClientUncheckedCreateWithoutTitleInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTitleInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutTitleInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutTitleInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutTitleInput>;
export const ClientUpsertWithoutTitleInputObjectZodSchema = makeSchema();
