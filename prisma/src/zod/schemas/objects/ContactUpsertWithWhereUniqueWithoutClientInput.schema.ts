import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutClientInputObjectSchema as ContactUpdateWithoutClientInputObjectSchema } from './ContactUpdateWithoutClientInput.schema';
import { ContactUncheckedUpdateWithoutClientInputObjectSchema as ContactUncheckedUpdateWithoutClientInputObjectSchema } from './ContactUncheckedUpdateWithoutClientInput.schema';
import { ContactCreateWithoutClientInputObjectSchema as ContactCreateWithoutClientInputObjectSchema } from './ContactCreateWithoutClientInput.schema';
import { ContactUncheckedCreateWithoutClientInputObjectSchema as ContactUncheckedCreateWithoutClientInputObjectSchema } from './ContactUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ContactUpdateWithoutClientInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => ContactCreateWithoutClientInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ContactUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ContactUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpsertWithWhereUniqueWithoutClientInput>;
export const ContactUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
