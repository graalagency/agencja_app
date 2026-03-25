import * as z from 'zod';
export const SubmissionEventFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  submissionId: z.number().int(),
  eventCode: z.number().int(),
  eventDate: z.date(),
  noOfCopies: z.number().int().optional(),
  endDate: z.date().optional(),
  createdAt: z.date(),
  Submission: z.unknown()
}));