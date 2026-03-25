import * as z from 'zod';

export const AgreementAdvanceScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'agreementId', 'instalment', 'advTermId', 'advTypeId', 'amount', 'termDate', 'royaltyId', 'createdAt'])

export type AgreementAdvanceScalarFieldEnum = z.infer<typeof AgreementAdvanceScalarFieldEnumSchema>;