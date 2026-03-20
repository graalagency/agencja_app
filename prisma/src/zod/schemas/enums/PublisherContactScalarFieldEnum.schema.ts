import * as z from 'zod';

export const PublisherContactScalarFieldEnumSchema = z.enum(['id', 'contactId', 'publisherId', 'isDefault', 'createdAt'])

export type PublisherContactScalarFieldEnum = z.infer<typeof PublisherContactScalarFieldEnumSchema>;