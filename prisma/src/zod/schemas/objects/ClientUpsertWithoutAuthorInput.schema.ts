import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutAuthorInputObjectSchema as ClientUpdateWithoutAuthorInputObjectSchema } from './ClientUpdateWithoutAuthorInput.schema';
import { ClientUncheckedUpdateWithoutAuthorInputObjectSchema as ClientUncheckedUpdateWithoutAuthorInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthorInput.schema';
import { ClientCreateWithoutAuthorInputObjectSchema as ClientCreateWithoutAuthorInputObjectSchema } from './ClientCreateWithoutAuthorInput.schema';
import { ClientUncheckedCreateWithoutAuthorInputObjectSchema as ClientUncheckedCreateWithoutAuthorInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutAuthorInput>;
export const ClientUpsertWithoutAuthorInputObjectZodSchema = makeSchema();
