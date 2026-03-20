import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './ClientContactWhereUniqueInput.schema';
import { ClientContactUpdateWithoutContactInputObjectSchema as ClientContactUpdateWithoutContactInputObjectSchema } from './ClientContactUpdateWithoutContactInput.schema';
import { ClientContactUncheckedUpdateWithoutContactInputObjectSchema as ClientContactUncheckedUpdateWithoutContactInputObjectSchema } from './ClientContactUncheckedUpdateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientContactWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientContactUpdateWithoutContactInputObjectSchema), z.lazy(() => ClientContactUncheckedUpdateWithoutContactInputObjectSchema)])
}).strict();
export const ClientContactUpdateWithWhereUniqueWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientContactUpdateWithWhereUniqueWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactUpdateWithWhereUniqueWithoutContactInput>;
export const ClientContactUpdateWithWhereUniqueWithoutContactInputObjectZodSchema = makeSchema();
