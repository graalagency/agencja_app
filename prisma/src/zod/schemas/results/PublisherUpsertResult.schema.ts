import * as z from 'zod';
export const PublisherUpsertResultSchema = z.object({
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
  regon: z.string().optional()
});