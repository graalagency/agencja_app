import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutPublisherContactInputObjectSchema as ContactCreateWithoutPublisherContactInputObjectSchema } from './ContactCreateWithoutPublisherContactInput.schema';
import { ContactUncheckedCreateWithoutPublisherContactInputObjectSchema as ContactUncheckedCreateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedCreateWithoutPublisherContactInput.schema';
import { ContactCreateOrConnectWithoutPublisherContactInputObjectSchema as ContactCreateOrConnectWithoutPublisherContactInputObjectSchema } from './ContactCreateOrConnectWithoutPublisherContactInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutPublisherContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutPublisherContactInputObjectSchema).optional(),
  connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional()
}).strict();
export const ContactCreateNestedOneWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.ContactCreateNestedOneWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateNestedOneWithoutPublisherContactInput>;
export const ContactCreateNestedOneWithoutPublisherContactInputObjectZodSchema = makeSchema();
