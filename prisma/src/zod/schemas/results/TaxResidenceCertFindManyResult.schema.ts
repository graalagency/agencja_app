import * as z from 'zod';
export const TaxResidenceCertFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  clientId: z.number().int().optional(),
  publisherId: z.number().int().optional(),
  validDate: z.date(),
  requestDate: z.date().optional(),
  receiveDate: z.date().optional(),
  hasCert: z.boolean(),
  notes: z.string().optional(),
  fileData: z.instanceof(Uint8Array).optional(),
  fileName: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Client: z.unknown().optional(),
  Publisher: z.unknown().optional(),
  SendLog: z.array(z.unknown())
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