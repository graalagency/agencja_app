import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  some: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  none: z.lazy(() => ContactWhereInputObjectSchema).optional()
}).strict();
export const ContactListRelationFilterObjectSchema: z.ZodType<Prisma.ContactListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ContactListRelationFilter>;
export const ContactListRelationFilterObjectZodSchema = makeSchema();
