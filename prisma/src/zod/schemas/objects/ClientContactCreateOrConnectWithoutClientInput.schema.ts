import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactCreateWithoutClientInputObjectSchema as ClientContactCreateWithoutClientInputObjectSchema } from './ClientContactCreateWithoutClientInput.schema';
import { ClientContactUncheckedCreateWithoutClientInputObjectSchema as ClientContactUncheckedCreateWithoutClientInputObjectSchema } from './ClientContactUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientContactCreateWithoutClientInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ClientContactCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateOrConnectWithoutClientInput>;
export const ClientContactCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
