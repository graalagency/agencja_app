import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactCreateWithoutClientInputObjectSchema as ClientContactCreateWithoutClientInputObjectSchema } from './ClientContactCreateWithoutClientInput.schema';
import { ClientContactUncheckedCreateWithoutClientInputObjectSchema as ClientContactUncheckedCreateWithoutClientInputObjectSchema } from './ClientContactUncheckedCreateWithoutClientInput.schema';
import { ClientContactCreateOrConnectWithoutClientInputObjectSchema as ClientContactCreateOrConnectWithoutClientInputObjectSchema } from './ClientContactCreateOrConnectWithoutClientInput.schema';
import { ClientContactCreateManyClientInputEnvelopeObjectSchema as ClientContactCreateManyClientInputEnvelopeObjectSchema } from './ClientContactCreateManyClientInputEnvelope.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientContactCreateWithoutClientInputObjectSchema), z.lazy(() => ClientContactCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ClientContactUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientContactCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ClientContactCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientContactCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientContactUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUncheckedCreateNestedManyWithoutClientInput>;
export const ClientContactUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
