import * as z from 'zod';
// prettier-ignore
export const SubmissionEventModelSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    submissionId: z.number().int(),
    eventCode: z.number().int(),
    eventDate: z.date(),
    noOfCopies: z.number().int().nullable(),
    endDate: z.date().nullable(),
    createdAt: z.date(),
    Submission: z.unknown()
}).strict();

export type SubmissionEventPureType = z.infer<typeof SubmissionEventModelSchema>;
