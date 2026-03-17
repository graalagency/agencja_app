import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactScalarWhereInputObjectSchema as ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema';
import { ContactUpdateManyMutationInputObjectSchema as ContactUpdateManyMutationInputObjectSchema } from './ContactUpdateManyMutationInput.schema';
import { ContactUncheckedUpdateManyWithoutClientInputObjectSchema as ContactUncheckedUpdateManyWithoutClientInputObjectSchema } from './ContactUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ContactUpdateManyMutationInputObjectSchema), z.lazy(() => ContactUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const ContactUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.ContactUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateManyWithWhereWithoutClientInput>;
export const ContactUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
