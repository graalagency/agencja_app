import * as z from 'zod';

export const SubmissionScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'titleId', 'publisherId', 'contactId', 'copyTypeId', 'submSentTypeId', 'submDate', 'sentDate', 'endDate', 'returnDate', 'noOfCopies', 'trackingNo', 'exclusive', 'submNr', 'status', 'remarks', 'userMod', 'dateMod', 'createdAt', 'updatedAt'])

export type SubmissionScalarFieldEnum = z.infer<typeof SubmissionScalarFieldEnumSchema>;