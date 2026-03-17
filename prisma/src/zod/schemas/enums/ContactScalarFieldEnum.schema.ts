import * as z from 'zod';

export const ContactScalarFieldEnumSchema = z.enum(['id', 'phoneNumber', 'firstName', 'middleName', 'lastName', 'informal', 'fax', 'email', 'contactPosition', 'accountant', 'photos', 'clientId', 'createdAt', 'updatedAt'])

export type ContactScalarFieldEnum = z.infer<typeof ContactScalarFieldEnumSchema>;