import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutDocumentInputObjectSchema as ClientCreateWithoutDocumentInputObjectSchema } from './ClientCreateWithoutDocumentInput.schema';
import { ClientUncheckedCreateWithoutDocumentInputObjectSchema as ClientUncheckedCreateWithoutDocumentInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentInput.schema';
import { ClientCreateOrConnectWithoutDocumentInputObjectSchema as ClientCreateOrConnectWithoutDocumentInputObjectSchema } from './ClientCreateOrConnectWithoutDocumentInput.schema';
import { ClientUpsertWithoutDocumentInputObjectSchema as ClientUpsertWithoutDocumentInputObjectSchema } from './ClientUpsertWithoutDocumentInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutDocumentInputObjectSchema as ClientUpdateToOneWithWhereWithoutDocumentInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutDocumentInput.schema';
import { ClientUpdateWithoutDocumentInputObjectSchema as ClientUpdateWithoutDocumentInputObjectSchema } from './ClientUpdateWithoutDocumentInput.schema';
import { ClientUncheckedUpdateWithoutDocumentInputObjectSchema as ClientUncheckedUpdateWithoutDocumentInputObjectSchema } from './ClientUncheckedUpdateWithoutDocumentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutDocumentInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutDocumentInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutDocumentInputObjectSchema), z.lazy(() => ClientUpdateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutDocumentInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutDocumentNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutDocumentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutDocumentNestedInput>;
export const ClientUpdateOneRequiredWithoutDocumentNestedInputObjectZodSchema = makeSchema();
