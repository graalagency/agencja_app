import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutAuthorInputObjectSchema as ClientCreateWithoutAuthorInputObjectSchema } from './ClientCreateWithoutAuthorInput.schema';
import { ClientUncheckedCreateWithoutAuthorInputObjectSchema as ClientUncheckedCreateWithoutAuthorInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorInput.schema';
import { ClientCreateOrConnectWithoutAuthorInputObjectSchema as ClientCreateOrConnectWithoutAuthorInputObjectSchema } from './ClientCreateOrConnectWithoutAuthorInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAuthorInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutAuthorInput>;
export const ClientCreateNestedOneWithoutAuthorInputObjectZodSchema = makeSchema();
