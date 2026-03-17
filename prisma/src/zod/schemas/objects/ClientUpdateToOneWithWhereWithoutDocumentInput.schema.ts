import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutDocumentInputObjectSchema as ClientUpdateWithoutDocumentInputObjectSchema } from './ClientUpdateWithoutDocumentInput.schema';
import { ClientUncheckedUpdateWithoutDocumentInputObjectSchema as ClientUncheckedUpdateWithoutDocumentInputObjectSchema } from './ClientUncheckedUpdateWithoutDocumentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutDocumentInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutDocumentInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutDocumentInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutDocumentInput>;
export const ClientUpdateToOneWithWhereWithoutDocumentInputObjectZodSchema = makeSchema();
