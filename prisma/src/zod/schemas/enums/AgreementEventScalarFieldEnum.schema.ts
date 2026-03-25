import * as z from 'zod';

export const AgreementEventScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'agreementId', 'eventCode', 'eventDate', 'endDate', 'noOfCopies', 'dateMod', 'userMod', 'createdAt'])

export type AgreementEventScalarFieldEnum = z.infer<typeof AgreementEventScalarFieldEnumSchema>;