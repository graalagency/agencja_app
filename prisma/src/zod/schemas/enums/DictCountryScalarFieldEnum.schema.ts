import * as z from 'zod';

export const DictCountryScalarFieldEnumSchema = z.enum(['id', 'description', 'code', 'tax', 'eu', 'createdAt', 'updatedAt'])

export type DictCountryScalarFieldEnum = z.infer<typeof DictCountryScalarFieldEnumSchema>;