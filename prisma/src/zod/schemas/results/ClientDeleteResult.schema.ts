import * as z from 'zod';
export const ClientDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  address: z.string().optional(),
  bankAccount: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  legalForm: z.string().optional(),
  nip: z.string().optional(),
  notes: z.string().optional(),
  postalCode: z.string().optional(),
  regon: z.string().optional(),
  Author: z.array(z.unknown()),
  Contact: z.array(z.unknown()),
  Document: z.array(z.unknown()),
  Invoice: z.array(z.unknown())
}));