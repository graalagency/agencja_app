import * as z from 'zod';
export const SubmissionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  titleId: z.number().int().optional(),
  publisherId: z.number().int().optional(),
  contactId: z.number().int().optional(),
  copyTypeId: z.number().int().optional(),
  submSentTypeId: z.number().int().optional(),
  submDate: z.date(),
  sentDate: z.date().optional(),
  endDate: z.date().optional(),
  returnDate: z.date().optional(),
  noOfCopies: z.number().int().optional(),
  trackingNo: z.string().optional(),
  exclusive: z.boolean(),
  submNr: z.number().int().optional(),
  status: z.string().optional(),
  remarks: z.string().optional(),
  userMod: z.string().optional(),
  dateMod: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Title: z.unknown().optional(),
  Publisher: z.unknown().optional(),
  Events: z.array(z.unknown())
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