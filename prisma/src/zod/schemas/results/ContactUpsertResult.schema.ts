import * as z from 'zod';
export const ContactUpsertResultSchema = z.object({
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
});