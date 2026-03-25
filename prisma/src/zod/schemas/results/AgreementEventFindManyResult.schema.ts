import * as z from 'zod';
export const AgreementEventFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  agreementId: z.number().int(),
  eventCode: z.number().int(),
  eventDate: z.date().optional(),
  endDate: z.date().optional(),
  noOfCopies: z.number().int().optional(),
  dateMod: z.date().optional(),
  userMod: z.string().optional(),
  createdAt: z.date(),
  Agreement: z.unknown()
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