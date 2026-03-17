import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutDocumentInputObjectSchema as ClientUpdateWithoutDocumentInputObjectSchema } from './ClientUpdateWithoutDocumentInput.schema';
import { ClientUncheckedUpdateWithoutDocumentInputObjectSchema as ClientUncheckedUpdateWithoutDocumentInputObjectSchema } from './ClientUncheckedUpdateWithoutDocumentInput.schema';
import { ClientCreateWithoutDocumentInputObjectSchema as ClientCreateWithoutDocumentInputObjectSchema } from './ClientCreateWithoutDocumentInput.schema';
import { ClientUncheckedCreateWithoutDocumentInputObjectSchema as ClientUncheckedCreateWithoutDocumentInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutDocumentInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutDocumentInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutDocumentInput>;
export const ClientUpsertWithoutDocumentInputObjectZodSchema = makeSchema();
