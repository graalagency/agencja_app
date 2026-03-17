import * as z from 'zod';
export const ClientFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});