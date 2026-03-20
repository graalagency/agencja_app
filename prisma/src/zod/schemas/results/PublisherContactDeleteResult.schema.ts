import * as z from 'zod';
export const PublisherContactDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  publisherId: z.number().int(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  Contact: z.unknown(),
  Publisher: z.unknown()
}));