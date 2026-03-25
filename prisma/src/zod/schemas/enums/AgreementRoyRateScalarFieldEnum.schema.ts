import * as z from 'zod';

export const AgreementRoyRateScalarFieldEnumSchema = z.enum(['id', 'agreementId', 'rightId', 'step', 'copiesMax', 'rate'])

export type AgreementRoyRateScalarFieldEnum = z.infer<typeof AgreementRoyRateScalarFieldEnumSchema>;