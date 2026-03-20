import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactCreateWithoutContactInputObjectSchema as ClientContactCreateWithoutContactInputObjectSchema } from './ClientContactCreateWithoutContactInput.schema';
import { ClientContactUncheckedCreateWithoutContactInputObjectSchema as ClientContactUncheckedCreateWithoutContactInputObjectSchema } from './ClientContactUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientContactCreateWithoutContactInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const ClientContactCreateOrConnectWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactCreateOrConnectWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateOrConnectWithoutContactInput>;
export const ClientContactCreateOrConnectWithoutContactInputObjectZodSchema = makeSchema();
