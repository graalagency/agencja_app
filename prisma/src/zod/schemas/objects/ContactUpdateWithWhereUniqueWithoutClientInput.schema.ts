import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutClientInputObjectSchema as ContactUpdateWithoutClientInputObjectSchema } from './ContactUpdateWithoutClientInput.schema';
import { ContactUncheckedUpdateWithoutClientInputObjectSchema as ContactUncheckedUpdateWithoutClientInputObjectSchema } from './ContactUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ContactUpdateWithoutClientInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const ContactUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ContactUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateWithWhereUniqueWithoutClientInput>;
export const ContactUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
