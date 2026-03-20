import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactUpdateWithoutClientInputObjectSchema as ClientContactUpdateWithoutClientInputObjectSchema } from './ClientContactUpdateWithoutClientInput.schema';
import { ClientContactUncheckedUpdateWithoutClientInputObjectSchema as ClientContactUncheckedUpdateWithoutClientInputObjectSchema } from './ClientContactUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientContactUpdateWithoutClientInputObjectSchema), z.lazy(() => ClientContactUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const ClientContactUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateWithWhereUniqueWithoutClientInput>;
export const ClientContactUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
