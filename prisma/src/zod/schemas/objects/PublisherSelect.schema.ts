import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  address: z.boolean().optional(),
  bankAccount: z.boolean().optional(),
  city: z.boolean().optional(),
  country: z.boolean().optional(),
  legalForm: z.boolean().optional(),
  nip: z.boolean().optional(),
  notes: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  regon: z.boolean().optional()
}).strict();
export const PublisherSelectObjectSchema: z.ZodType<Prisma.PublisherSelect> = makeSchema() as unknown as z.ZodType<Prisma.PublisherSelect>;
export const PublisherSelectObjectZodSchema = makeSchema();
