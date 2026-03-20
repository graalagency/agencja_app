import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutClientContactInputObjectSchema as ContactCreateWithoutClientContactInputObjectSchema } from './ContactCreateWithoutClientContactInput.schema';
import { ContactUncheckedCreateWithoutClientContactInputObjectSchema as ContactUncheckedCreateWithoutClientContactInputObjectSchema } from './ContactUncheckedCreateWithoutClientContactInput.schema';
import { ContactCreateOrConnectWithoutClientContactInputObjectSchema as ContactCreateOrConnectWithoutClientContactInputObjectSchema } from './ContactCreateOrConnectWithoutClientContactInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutClientContactInputObjectSchema).optional(),
  connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional()
}).strict();
export const ContactCreateNestedOneWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ContactCreateNestedOneWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateNestedOneWithoutClientContactInput>;
export const ContactCreateNestedOneWithoutClientContactInputObjectZodSchema = makeSchema();
