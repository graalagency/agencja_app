import * as z from 'zod';
export const AgreementEventFindUniqueResultSchema = z.nullable(z.object({
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
}));