import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { ContactUpdateWithoutClientContactInputObjectSchema as ContactUpdateWithoutClientContactInputObjectSchema } from './ContactUpdateWithoutClientContactInput.schema';
import { ContactUncheckedUpdateWithoutClientContactInputObjectSchema as ContactUncheckedUpdateWithoutClientContactInputObjectSchema } from './ContactUncheckedUpdateWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ContactUpdateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutClientContactInputObjectSchema)])
}).strict();
export const ContactUpdateToOneWithWhereWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ContactUpdateToOneWithWhereWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateToOneWithWhereWithoutClientContactInput>;
export const ContactUpdateToOneWithWhereWithoutClientContactInputObjectZodSchema = makeSchema();
