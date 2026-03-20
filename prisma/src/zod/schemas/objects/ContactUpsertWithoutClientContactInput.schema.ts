import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactUpdateWithoutClientContactInputObjectSchema as ContactUpdateWithoutClientContactInputObjectSchema } from './ContactUpdateWithoutClientContactInput.schema';
import { ContactUncheckedUpdateWithoutClientContactInputObjectSchema as ContactUncheckedUpdateWithoutClientContactInputObjectSchema } from './ContactUncheckedUpdateWithoutClientContactInput.schema';
import { ContactCreateWithoutClientContactInputObjectSchema as ContactCreateWithoutClientContactInputObjectSchema } from './ContactCreateWithoutClientContactInput.schema';
import { ContactUncheckedCreateWithoutClientContactInputObjectSchema as ContactUncheckedCreateWithoutClientContactInputObjectSchema } from './ContactUncheckedCreateWithoutClientContactInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ContactUpdateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutClientContactInputObjectSchema)]),
  create: z.union([z.lazy(() => ContactCreateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientContactInputObjectSchema)]),
  where: z.lazy(() => ContactWhereInputObjectSchema).optional()
}).strict();
export const ContactUpsertWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ContactUpsertWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpsertWithoutClientContactInput>;
export const ContactUpsertWithoutClientContactInputObjectZodSchema = makeSchema();
