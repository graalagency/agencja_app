import * as z from 'zod';

export const AuthorScalarFieldEnumSchema = z.enum(['id', 'firstName', 'middleName', 'lastName', 'description', 'createdAt', 'updatedAt', 'photos', 'personalEmail', 'workEmail', 'clientId'])

export type AuthorScalarFieldEnum = z.infer<typeof AuthorScalarFieldEnumSchema>;