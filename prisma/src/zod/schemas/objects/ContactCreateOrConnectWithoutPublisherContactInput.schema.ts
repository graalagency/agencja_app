import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutPublisherContactInputObjectSchema as ContactCreateWithoutPublisherContactInputObjectSchema } from './ContactCreateWithoutPublisherContactInput.schema';
import { ContactUncheckedCreateWithoutPublisherContactInputObjectSchema as ContactUncheckedCreateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedCreateWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContactCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutPublisherContactInputObjectSchema)])
}).strict();
export const ContactCreateOrConnectWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.ContactCreateOrConnectWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateOrConnectWithoutPublisherContactInput>;
export const ContactCreateOrConnectWithoutPublisherContactInputObjectZodSchema = makeSchema();
