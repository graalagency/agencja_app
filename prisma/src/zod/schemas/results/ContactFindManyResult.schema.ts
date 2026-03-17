import * as z from 'zod';
export const ContactFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  phoneNumber: z.string().optional(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  informal: z.number().int(),
  fax: z.string().optional(),
  email: z.string().optional(),
  contactPosition: z.string().optional(),
  accountant: z.number().int().optional(),
  photos: z.unknown().optional(),
  clientId: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Client: z.unknown().optional()
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