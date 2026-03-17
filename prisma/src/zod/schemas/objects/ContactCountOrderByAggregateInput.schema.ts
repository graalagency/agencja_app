import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  phoneNumber: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  informal: SortOrderSchema.optional(),
  fax: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  contactPosition: SortOrderSchema.optional(),
  accountant: SortOrderSchema.optional(),
  photos: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ContactCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCountOrderByAggregateInput>;
export const ContactCountOrderByAggregateInputObjectZodSchema = makeSchema();
