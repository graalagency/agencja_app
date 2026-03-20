import * as z from 'zod';
export const TaxResidenceSendUpsertResultSchema = z.object({
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
});