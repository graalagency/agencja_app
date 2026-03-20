import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactScalarWhereInputObjectSchema as ClientContactScalarWhereInputObjectSchema } from './ClientContactScalarWhereInput.schema';
import { ClientContactUpdateManyMutationInputObjectSchema as ClientContactUpdateManyMutationInputObjectSchema } from './ClientContactUpdateManyMutationInput.schema';
import { ClientContactUncheckedUpdateManyWithoutClientInputObjectSchema as ClientContactUncheckedUpdateManyWithoutClientInputObjectSchema } from './ClientContactUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientContactUpdateManyMutationInputObjectSchema), z.lazy(() => ClientContactUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const ClientContactUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateManyWithWhereWithoutClientInput>;
export const ClientContactUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
