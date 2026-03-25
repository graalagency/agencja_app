import * as z from 'zod';

export const SubmissionEventScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'submissionId', 'eventCode', 'eventDate', 'noOfCopies', 'endDate', 'createdAt'])

export type SubmissionEventScalarFieldEnum = z.infer<typeof SubmissionEventScalarFieldEnumSchema>;