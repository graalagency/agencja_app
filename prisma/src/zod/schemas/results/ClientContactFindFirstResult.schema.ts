import * as z from 'zod';
export const ClientContactFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  clientId: z.number().int(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  Contact: z.unknown(),
  Client: z.unknown()
}));