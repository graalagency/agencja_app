import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutClientInputObjectSchema as ContactCreateWithoutClientInputObjectSchema } from './ContactCreateWithoutClientInput.schema';
import { ContactUncheckedCreateWithoutClientInputObjectSchema as ContactUncheckedCreateWithoutClientInputObjectSchema } from './ContactUncheckedCreateWithoutClientInput.schema';
import { ContactCreateOrConnectWithoutClientInputObjectSchema as ContactCreateOrConnectWithoutClientInputObjectSchema } from './ContactCreateOrConnectWithoutClientInput.schema';
import { ContactCreateManyClientInputEnvelopeObjectSchema as ContactCreateManyClientInputEnvelopeObjectSchema } from './ContactCreateManyClientInputEnvelope.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutClientInputObjectSchema), z.lazy(() => ContactCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ContactUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ContactCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ContactCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ContactCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ContactWhereUniqueInputObjectSchema), z.lazy(() => ContactWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ContactUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.ContactUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUncheckedCreateNestedManyWithoutClientInput>;
export const ContactUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
