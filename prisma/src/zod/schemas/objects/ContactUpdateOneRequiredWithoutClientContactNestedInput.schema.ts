import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutClientContactInputObjectSchema as ContactCreateWithoutClientContactInputObjectSchema } from './ContactCreateWithoutClientContactInput.schema';
import { ContactUncheckedCreateWithoutClientContactInputObjectSchema as ContactUncheckedCreateWithoutClientContactInputObjectSchema } from './ContactUncheckedCreateWithoutClientContactInput.schema';
import { ContactCreateOrConnectWithoutClientContactInputObjectSchema as ContactCreateOrConnectWithoutClientContactInputObjectSchema } from './ContactCreateOrConnectWithoutClientContactInput.schema';
import { ContactUpsertWithoutClientContactInputObjectSchema as ContactUpsertWithoutClientContactInputObjectSchema } from './ContactUpsertWithoutClientContactInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateToOneWithWhereWithoutClientContactInputObjectSchema as ContactUpdateToOneWithWhereWithoutClientContactInputObjectSchema } from './ContactUpdateToOneWithWhereWithoutClientContactInput.schema';
import { ContactUpdateWithoutClientContactInputObjectSchema as ContactUpdateWithoutClientContactInputObjectSchema } from './ContactUpdateWithoutClientContactInput.schema';
import { ContactUncheckedUpdateWithoutClientContactInputObjectSchema as ContactUncheckedUpdateWithoutClientContactInputObjectSchema } from './ContactUncheckedUpdateWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutClientContactInputObjectSchema).optional(),
  upsert: z.lazy(() => ContactUpsertWithoutClientContactInputObjectSchema).optional(),
  connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ContactUpdateToOneWithWhereWithoutClientContactInputObjectSchema), z.lazy(() => ContactUpdateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutClientContactInputObjectSchema)]).optional()
}).strict();
export const ContactUpdateOneRequiredWithoutClientContactNestedInputObjectSchema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutClientContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateOneRequiredWithoutClientContactNestedInput>;
export const ContactUpdateOneRequiredWithoutClientContactNestedInputObjectZodSchema = makeSchema();
