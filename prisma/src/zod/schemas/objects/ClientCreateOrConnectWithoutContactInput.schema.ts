import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutContactInputObjectSchema as ClientCreateWithoutContactInputObjectSchema } from './ClientCreateWithoutContactInput.schema';
import { ClientUncheckedCreateWithoutContactInputObjectSchema as ClientUncheckedCreateWithoutContactInputObjectSchema } from './ClientUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutContactInput>;
export const ClientCreateOrConnectWithoutContactInputObjectZodSchema = makeSchema();
