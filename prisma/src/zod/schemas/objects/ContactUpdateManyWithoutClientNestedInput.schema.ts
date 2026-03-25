import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutClientInputObjectSchema as ContactCreateWithoutClientInputObjectSchema } from './ContactCreateWithoutClientInput.schema';
import { ContactUncheckedCreateWithoutClientInputObjectSchema as ContactUncheckedCreateWithoutClientInputObjectSchema } from './ContactUncheckedCreateWithoutClientInput.schema';
import { ContactCreateOrConnectWithoutClientInputObjectSchema as ContactCreateOrConnectWithoutClientInputObjectSchema } from './ContactCreateOrConnectWithoutClientInput.schema';
import { ContactUpsertWithWhereUniqueWithoutClientInputObjectSchema as ContactUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './ContactUpsertWithWhereUniqueWithoutClientInput.schema';
import { ContactCreateManyClientInputEnvelopeObjectSchema as ContactCreateManyClientInputEnvelopeObjectSchema } from './ContactCreateManyClientInputEnvelope.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithWhereUniqueWithoutClientInputObjectSchema as ContactUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './ContactUpdateWithWhereUniqueWithoutClientInput.schema';
import { ContactUpdateManyWithWhereWithoutClientInputObjectSchema as ContactUpdateManyWithWhereWithoutClientInputObjectSchema } from './ContactUpdateManyWithWhereWithoutClientInput.schema';
import { ContactScalarWhereInputObjectSchema as ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutClientInputObjectSchema), z.lazy(() => ContactCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ContactUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ContactCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ContactCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ContactUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ContactUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ContactCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ContactWhereUniqueInputObjectSchema), z.lazy(() => ContactWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ContactWhereUniqueInputObjectSchema), z.lazy(() => ContactWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ContactWhereUniqueInputObjectSchema), z.lazy(() => ContactWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ContactWhereUniqueInputObjectSchema), z.lazy(() => ContactWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ContactUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ContactUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ContactUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => ContactUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ContactScalarWhereInputObjectSchema), z.lazy(() => ContactScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ContactUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.ContactUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateManyWithoutClientNestedInput>;
export const ContactUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
