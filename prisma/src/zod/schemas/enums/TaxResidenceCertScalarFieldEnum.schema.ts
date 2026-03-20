import * as z from 'zod';

export const TaxResidenceCertScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'clientId', 'publisherId', 'validDate', 'requestDate', 'receiveDate', 'hasCert', 'notes', 'fileData', 'fileName', 'createdAt', 'updatedAt'])

export type TaxResidenceCertScalarFieldEnum = z.infer<typeof TaxResidenceCertScalarFieldEnumSchema>;