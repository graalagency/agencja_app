import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutDocumentInputObjectSchema as ClientCreateWithoutDocumentInputObjectSchema } from './ClientCreateWithoutDocumentInput.schema';
import { ClientUncheckedCreateWithoutDocumentInputObjectSchema as ClientUncheckedCreateWithoutDocumentInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutDocumentInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutDocumentInput>;
export const ClientCreateOrConnectWithoutDocumentInputObjectZodSchema = makeSchema();
