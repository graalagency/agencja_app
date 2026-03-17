import * as z from 'zod';

export const DictCurrencyScalarFieldEnumSchema = z.enum(['id', 'code', 'description', 'createdAt', 'updatedAt'])

export type DictCurrencyScalarFieldEnum = z.infer<typeof DictCurrencyScalarFieldEnumSchema>;