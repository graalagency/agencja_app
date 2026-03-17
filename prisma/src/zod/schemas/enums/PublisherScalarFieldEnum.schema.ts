import * as z from 'zod';

export const PublisherScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'createdAt', 'updatedAt', 'address', 'bankAccount', 'city', 'country', 'legalForm', 'nip', 'notes', 'postalCode', 'regon'])

export type PublisherScalarFieldEnum = z.infer<typeof PublisherScalarFieldEnumSchema>;