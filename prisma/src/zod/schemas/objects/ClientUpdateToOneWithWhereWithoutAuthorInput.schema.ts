import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutAuthorInputObjectSchema as ClientUpdateWithoutAuthorInputObjectSchema } from './ClientUpdateWithoutAuthorInput.schema';
import { ClientUncheckedUpdateWithoutAuthorInputObjectSchema as ClientUncheckedUpdateWithoutAuthorInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthorInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAuthorInput>;
export const ClientUpdateToOneWithWhereWithoutAuthorInputObjectZodSchema = makeSchema();
