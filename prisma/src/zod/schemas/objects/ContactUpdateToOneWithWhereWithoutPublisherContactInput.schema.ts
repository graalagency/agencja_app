import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { ContactUpdateWithoutPublisherContactInputObjectSchema as ContactUpdateWithoutPublisherContactInputObjectSchema } from './ContactUpdateWithoutPublisherContactInput.schema';
import { ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema as ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedUpdateWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ContactUpdateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema)])
}).strict();
export const ContactUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema: z.ZodType<Prisma.ContactUpdateToOneWithWhereWithoutPublisherContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateToOneWithWhereWithoutPublisherContactInput>;
export const ContactUpdateToOneWithWhereWithoutPublisherContactInputObjectZodSchema = makeSchema();
