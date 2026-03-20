import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactUpdateWithoutClientInputObjectSchema as ClientContactUpdateWithoutClientInputObjectSchema } from './ClientContactUpdateWithoutClientInput.schema';
import { ClientContactUncheckedUpdateWithoutClientInputObjectSchema as ClientContactUncheckedUpdateWithoutClientInputObjectSchema } from './ClientContactUncheckedUpdateWithoutClientInput.schema';
import { ClientContactCreateWithoutClientInputObjectSchema as ClientContactCreateWithoutClientInputObjectSchema } from './ClientContactCreateWithoutClientInput.schema';
import { ClientContactUncheckedCreateWithoutClientInputObjectSchema as ClientContactUncheckedCreateWithoutClientInputObjectSchema } from './ClientContactUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientContactUpdateWithoutClientInputObjectSchema), z.lazy(() => ClientContactUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientContactCreateWithoutClientInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ClientContactUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientContactUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpsertWithWhereUniqueWithoutClientInput>;
export const ClientContactUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
