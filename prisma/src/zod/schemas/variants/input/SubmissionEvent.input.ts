import * as z from 'zod';
// prettier-ignore
export const SubmissionEventInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    submissionId: z.number().int(),
    eventCode: z.number().int(),
    eventDate: z.date(),
    noOfCopies: z.number().int().optional().nullable(),
    endDate: z.date().optional().nullable(),
    createdAt: z.date(),
    Submission: z.unknown()
}).strict();

export type SubmissionEventInputType = z.infer<typeof SubmissionEventInputSchema>;
