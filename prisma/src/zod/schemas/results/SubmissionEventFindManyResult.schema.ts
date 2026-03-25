import * as z from 'zod';
export const SubmissionEventFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  submissionId: z.number().int(),
  eventCode: z.number().int(),
  eventDate: z.date(),
  noOfCopies: z.number().int().optional(),
  endDate: z.date().optional(),
  createdAt: z.date(),
  Submission: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});