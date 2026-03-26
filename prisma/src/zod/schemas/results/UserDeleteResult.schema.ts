import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string().optional(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.unknown(),
  permissions: z.unknown().optional(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  locale: z.string(),
  dashboardConfig: z.unknown().optional()
}));