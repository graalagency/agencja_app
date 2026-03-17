import * as z from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'createdAt', 'updatedAt', 'address', 'bankAccount', 'city', 'country', 'legalForm', 'nip', 'notes', 'postalCode', 'regon'])

export type ClientScalarFieldEnum = z.infer<typeof ClientScalarFieldEnumSchema>;