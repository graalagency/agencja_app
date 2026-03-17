import * as z from 'zod';

export const CurrencyDictionaryScalarFieldEnumSchema = z.enum(['id', 'code', 'description', 'createdAt', 'updatedAt'])

export type CurrencyDictionaryScalarFieldEnum = z.infer<typeof CurrencyDictionaryScalarFieldEnumSchema>;