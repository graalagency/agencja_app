import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContactOrderByWithRelationInputObjectSchema as ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contactId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  Contact: z.lazy(() => ContactOrderByWithRelationInputObjectSchema).optional(),
  Client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ClientContactOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientContactOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactOrderByWithRelationInput>;
export const ClientContactOrderByWithRelationInputObjectZodSchema = makeSchema();
