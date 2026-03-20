import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutPublisherContactInputObjectSchema as ContactCreateWithoutPublisherContactInputObjectSchema } from './ContactCreateWithoutPublisherContactInput.schema';
import { ContactUncheckedCreateWithoutPublisherContactInputObjectSchema as ContactUncheckedCreateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedCreateWithoutPublisherContactInput.schema';
import { ContactCreateOrConnectWithoutPublisherContactInputObjectSchema as ContactCreateOrConnectWithoutPublisherContactInputObjectSchema } from './ContactCreateOrConnectWithoutPublisherContactInput.schema';
import { ContactUpsertWithoutPublisherContactInputObjectSchema as ContactUpsertWithoutPublisherContactInputObjectSchema } from './ContactUpsertWithoutPublisherContactInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema as ContactUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema } from './ContactUpdateToOneWithWhereWithoutPublisherContactInput.schema';
import { ContactUpdateWithoutPublisherContactInputObjectSchema as ContactUpdateWithoutPublisherContactInputObjectSchema } from './ContactUpdateWithoutPublisherContactInput.schema';
import { ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema as ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema } from './ContactUncheckedUpdateWithoutPublisherContactInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutPublisherContactInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutPublisherContactInputObjectSchema).optional(),
  upsert: z.lazy(() => ContactUpsertWithoutPublisherContactInputObjectSchema).optional(),
  connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ContactUpdateToOneWithWhereWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUpdateWithoutPublisherContactInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutPublisherContactInputObjectSchema)]).optional()
}).strict();
export const ContactUpdateOneRequiredWithoutPublisherContactNestedInputObjectSchema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutPublisherContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateOneRequiredWithoutPublisherContactNestedInput>;
export const ContactUpdateOneRequiredWithoutPublisherContactNestedInputObjectZodSchema = makeSchema();
