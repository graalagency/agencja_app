import * as z from 'zod';
export const ContactDeleteResultSchema = z.nullable(z.object({
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
  createdAt: z.date(),
  updatedAt: z.date(),
  ClientContact: z.array(z.unknown()),
  PublisherContact: z.array(z.unknown())
}));