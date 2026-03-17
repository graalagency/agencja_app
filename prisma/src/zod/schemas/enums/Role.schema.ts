import * as z from 'zod';

export const RoleSchema = z.enum(['ADMIN', 'USER', 'ADVANCED'])

export type Role = z.infer<typeof RoleSchema>;