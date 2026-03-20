import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutTitleInputObjectSchema as ClientUpdateWithoutTitleInputObjectSchema } from './ClientUpdateWithoutTitleInput.schema';
import { ClientUncheckedUpdateWithoutTitleInputObjectSchema as ClientUncheckedUpdateWithoutTitleInputObjectSchema } from './ClientUncheckedUpdateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutTitleInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutTitleInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutTitleInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutTitleInput>;
export const ClientUpdateToOneWithWhereWithoutTitleInputObjectZodSchema = makeSchema();
