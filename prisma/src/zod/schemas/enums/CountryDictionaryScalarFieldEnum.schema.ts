import * as z from 'zod';

export const CountryDictionaryScalarFieldEnumSchema = z.enum(['id', 'description', 'code', 'tax', 'eu', 'createdAt', 'updatedAt'])

export type CountryDictionaryScalarFieldEnum = z.infer<typeof CountryDictionaryScalarFieldEnumSchema>;