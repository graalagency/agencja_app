import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactScalarWhereInputObjectSchema as ClientContactScalarWhereInputObjectSchema } from './ClientContactScalarWhereInput.schema';
import { ClientContactUpdateManyMutationInputObjectSchema as ClientContactUpdateManyMutationInputObjectSchema } from './ClientContactUpdateManyMutationInput.schema';
import { ClientContactUncheckedUpdateManyWithoutContactInputObjectSchema as ClientContactUncheckedUpdateManyWithoutContactInputObjectSchema } from './ClientContactUncheckedUpdateManyWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientContactUpdateManyMutationInputObjectSchema), z.lazy(() => ClientContactUncheckedUpdateManyWithoutContactInputObjectSchema)])
}).strict();
export const ClientContactUpdateManyWithWhereWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateManyWithWhereWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateManyWithWhereWithoutContactInput>;
export const ClientContactUpdateManyWithWhereWithoutContactInputObjectZodSchema = makeSchema();
