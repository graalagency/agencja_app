import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactUpdateWithoutContactInputObjectSchema as ClientContactUpdateWithoutContactInputObjectSchema } from './ClientContactUpdateWithoutContactInput.schema';
import { ClientContactUncheckedUpdateWithoutContactInputObjectSchema as ClientContactUncheckedUpdateWithoutContactInputObjectSchema } from './ClientContactUncheckedUpdateWithoutContactInput.schema';
import { ClientContactCreateWithoutContactInputObjectSchema as ClientContactCreateWithoutContactInputObjectSchema } from './ClientContactCreateWithoutContactInput.schema';
import { ClientContactUncheckedCreateWithoutContactInputObjectSchema as ClientContactUncheckedCreateWithoutContactInputObjectSchema } from './ClientContactUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientContactUpdateWithoutContactInputObjectSchema), z.lazy(() => ClientContactUncheckedUpdateWithoutContactInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientContactCreateWithoutContactInputObjectSchema), z.lazy(() => ClientContactUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const ClientContactUpsertWithWhereUniqueWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactUpsertWithWhereUniqueWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpsertWithWhereUniqueWithoutContactInput>;
export const ClientContactUpsertWithWhereUniqueWithoutContactInputObjectZodSchema = makeSchema();
