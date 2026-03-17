import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutDocumentInputObjectSchema as ClientCreateWithoutDocumentInputObjectSchema } from './ClientCreateWithoutDocumentInput.schema';
import { ClientUncheckedCreateWithoutDocumentInputObjectSchema as ClientUncheckedCreateWithoutDocumentInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentInput.schema';
import { ClientCreateOrConnectWithoutDocumentInputObjectSchema as ClientCreateOrConnectWithoutDocumentInputObjectSchema } from './ClientCreateOrConnectWithoutDocumentInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutDocumentInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutDocumentInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutDocumentInput>;
export const ClientCreateNestedOneWithoutDocumentInputObjectZodSchema = makeSchema();
