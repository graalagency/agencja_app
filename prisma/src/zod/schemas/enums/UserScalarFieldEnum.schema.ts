import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'passwordHash', 'role', 'permissions', 'image', 'createdAt', 'updatedAt', 'locale', 'dashboardConfig'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;