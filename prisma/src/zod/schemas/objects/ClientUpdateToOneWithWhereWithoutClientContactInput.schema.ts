import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutClientContactInputObjectSchema as ClientUpdateWithoutClientContactInputObjectSchema } from './ClientUpdateWithoutClientContactInput.schema';
import { ClientUncheckedUpdateWithoutClientContactInputObjectSchema as ClientUncheckedUpdateWithoutClientContactInputObjectSchema } from './ClientUncheckedUpdateWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutClientContactInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutClientContactInput>;
export const ClientUpdateToOneWithWhereWithoutClientContactInputObjectZodSchema = makeSchema();
