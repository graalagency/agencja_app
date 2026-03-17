import * as z from 'zod';

export const LanguageDictionaryScalarFieldEnumSchema = z.enum(['id', 'code', 'description', 'createdAt', 'updatedAt'])

export type LanguageDictionaryScalarFieldEnum = z.infer<typeof LanguageDictionaryScalarFieldEnumSchema>;