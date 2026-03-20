import * as z from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'name', 'abbreviation', 'email', 'phone', 'fax', 'www', 'createdAt', 'updatedAt', 'address', 'address2', 'city', 'state', 'postalCode', 'country', 'language', 'legalForm', 'nip', 'vatId', 'regon', 'jurisdiction', 'status', 'notes', 'bankAccount', 'bankName', 'bankAddress', 'bankRoutingNo', 'bankAccountName', 'commission', 'commissionForeign', 'commissionMaterials', 'repModeId', 'parentId'])

export type ClientScalarFieldEnum = z.infer<typeof ClientScalarFieldEnumSchema>;