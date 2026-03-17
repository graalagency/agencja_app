import * as z from 'zod';
export const AuthorDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  photos: z.unknown().optional(),
  personalEmail: z.string().optional(),
  workEmail: z.string().optional(),
  clientId: z.number().int().optional(),
  Client: z.unknown().optional()
}));