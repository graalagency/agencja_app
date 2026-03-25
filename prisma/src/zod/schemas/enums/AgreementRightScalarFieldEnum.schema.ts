import * as z from 'zod';

export const AgreementRightScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'agreementId', 'rightFormId', 'priceTypeId', 'royPriceTypeId', 'royAccountIntervalId', 'distributionTypeId'])

export type AgreementRightScalarFieldEnum = z.infer<typeof AgreementRightScalarFieldEnumSchema>;