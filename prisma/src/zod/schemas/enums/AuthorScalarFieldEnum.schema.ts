import * as z from 'zod';

export const AuthorScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'firstName', 'middleName', 'lastName', 'suffix', 'penName', 'description', 'createdAt', 'updatedAt', 'photos', 'personalEmail', 'workEmail', 'clientId'])

export type AuthorScalarFieldEnum = z.infer<typeof AuthorScalarFieldEnumSchema>;