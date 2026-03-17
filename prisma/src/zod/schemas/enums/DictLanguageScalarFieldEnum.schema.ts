import * as z from 'zod';

export const DictLanguageScalarFieldEnumSchema = z.enum(['id', 'code', 'description', 'createdAt', 'updatedAt'])

export type DictLanguageScalarFieldEnum = z.infer<typeof DictLanguageScalarFieldEnumSchema>;