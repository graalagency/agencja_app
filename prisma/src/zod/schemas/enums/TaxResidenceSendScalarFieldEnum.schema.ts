import * as z from 'zod';

export const TaxResidenceSendScalarFieldEnumSchema = z.enum(['id', 'certId', 'clientId', 'publisherId', 'dateSend', 'sendOrig', 'sendCopy', 'createdAt'])

export type TaxResidenceSendScalarFieldEnum = z.infer<typeof TaxResidenceSendScalarFieldEnumSchema>;