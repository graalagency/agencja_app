import * as z from 'zod';
export const TaxResidenceSendFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  certId: z.number().int(),
  clientId: z.number().int().optional(),
  publisherId: z.number().int().optional(),
  dateSend: z.date().optional(),
  sendOrig: z.boolean(),
  sendCopy: z.boolean(),
  createdAt: z.date(),
  Cert: z.unknown(),
  Client: z.unknown().optional(),
  Publisher: z.unknown().optional()
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