import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutClientInputObjectSchema as ContactCreateWithoutClientInputObjectSchema } from './ContactCreateWithoutClientInput.schema';
import { ContactUncheckedCreateWithoutClientInputObjectSchema as ContactUncheckedCreateWithoutClientInputObjectSchema } from './ContactUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContactCreateWithoutClientInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ContactCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.ContactCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateOrConnectWithoutClientInput>;
export const ContactCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
