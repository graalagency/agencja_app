import * as z from 'zod';
export const TaxResidenceCertFindFirstResultSchema = z.nullable(z.object({
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
}));