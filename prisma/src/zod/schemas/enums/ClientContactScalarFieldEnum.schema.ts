import * as z from 'zod';

export const ClientContactScalarFieldEnumSchema = z.enum(['id', 'contactId', 'clientId', 'isDefault', 'createdAt'])

export type ClientContactScalarFieldEnum = z.infer<typeof ClientContactScalarFieldEnumSchema>;