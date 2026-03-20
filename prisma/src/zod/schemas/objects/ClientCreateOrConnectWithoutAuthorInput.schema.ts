import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutAuthorInputObjectSchema as ClientCreateWithoutAuthorInputObjectSchema } from './ClientCreateWithoutAuthorInput.schema';
import { ClientUncheckedCreateWithoutAuthorInputObjectSchema as ClientUncheckedCreateWithoutAuthorInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutAuthorInput>;
export const ClientCreateOrConnectWithoutAuthorInputObjectZodSchema = makeSchema();
