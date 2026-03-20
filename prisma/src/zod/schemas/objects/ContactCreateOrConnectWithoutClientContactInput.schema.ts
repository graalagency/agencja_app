import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutClientContactInputObjectSchema as ContactCreateWithoutClientContactInputObjectSchema } from './ContactCreateWithoutClientContactInput.schema';
import { ContactUncheckedCreateWithoutClientContactInputObjectSchema as ContactUncheckedCreateWithoutClientContactInputObjectSchema } from './ContactUncheckedCreateWithoutClientContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContactCreateWithoutClientContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutClientContactInputObjectSchema)])
}).strict();
export const ContactCreateOrConnectWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ContactCreateOrConnectWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateOrConnectWithoutClientContactInput>;
export const ContactCreateOrConnectWithoutClientContactInputObjectZodSchema = makeSchema();
