import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactCreateWithoutContactInputObjectSchema as ClientContactCreateWithoutContactInputObjectSchema } from './ClientContactCreateWithoutContactInput.schema';
import { ClientContactUncheckedCreateWithoutContactInputObjectSchema as ClientContactUncheckedCreateWithoutContactInputObjectSchema } from './ClientContactUncheckedCreateWithoutContactInput.schema';
import { ClientContactCreateOrConnectWithoutContactInputObjectSchema as ClientContactCreateOrConnectWithoutContactInputObjectSchema } from './ClientContactCreateOrConnectWithoutContactInput.schema';
import { ClientContactCreateManyContactInputEnvelopeObjectSchema as ClientContactCreateManyContactInputEnvelopeObjectSchema } from './ClientContactCreateManyContactInputEnvelope.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientContactCreateWithoutContactInputObjectSchema), z.lazy(() => ClientContactCreateWithoutContactInputObjectSchema).array(), z.lazy(() => ClientContactUncheckedCreateWithoutContactInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutContactInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientContactCreateOrConnectWithoutContactInputObjectSchema), z.lazy(() => ClientContactCreateOrConnectWithoutContactInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientContactCreateManyContactInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientContactWhereUniqueInputObjectSchema), z.lazy(() => ClientContactWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientContactCreateNestedManyWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactCreateNestedManyWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactCreateNestedManyWithoutContactInput>;
export const ClientContactCreateNestedManyWithoutContactInputObjectZodSchema = makeSchema();
