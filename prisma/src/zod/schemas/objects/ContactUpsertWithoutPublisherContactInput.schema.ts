import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactUpdateWithoutPublisherContactInputObjectSchema as ContactUpdateWithoutPublisherContactInputObjectSchema } from './ContactUpdateWithoutPublisherContactInput.schema';
import { ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema as ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedUpdateWithoutPublisherContactInput.schema';
import { ContactCreateWithoutPublisherContactInputObjectSchema as ContactCreateWithoutPublisherContactInputObjectSchema } from './ContactCreateWithoutPublisherContactInput.schema';
import { ContactUncheckedCreateWithoutPublisherContactInputObjectSchema as ContactUncheckedCreateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedCreateWithoutPublisherContactInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ContactUpdateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema)]),
  create: z.union([z.lazy(() => ContactCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutPublisherContactInputObjectSchema)]),
  where: z.lazy(() => ContactWhereInputObjectSchema).optional()
}).strict();
export const ContactUpsertWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.ContactUpsertWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpsertWithoutPublisherContactInput>;
export const ContactUpsertWithoutPublisherContactInputObjectZodSchema = makeSchema();
