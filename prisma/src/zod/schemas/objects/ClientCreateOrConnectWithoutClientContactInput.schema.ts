import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutClientContactInputObjectSchema as ClientCreateWithoutClientContactInputObjectSchema } from './ClientCreateWithoutClientContactInput.schema';
import { ClientUncheckedCreateWithoutClientContactInputObjectSchema as ClientUncheckedCreateWithoutClientContactInputObjectSchema } from './ClientUncheckedCreateWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutClientContactInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutClientContactInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutClientContactInput>;
export const ClientCreateOrConnectWithoutClientContactInputObjectZodSchema = makeSchema();
