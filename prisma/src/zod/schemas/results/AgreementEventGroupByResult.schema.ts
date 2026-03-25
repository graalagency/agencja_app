import * as z from 'zod';
export const AgreementEventGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int(),
  agreementId: z.number().int(),
  eventCode: z.number().int(),
  eventDate: z.date(),
  endDate: z.date(),
  noOfCopies: z.number().int(),
  dateMod: z.date(),
  userMod: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    sourceId: z.number(),
    agreementId: z.number(),
    eventCode: z.number(),
    eventDate: z.number(),
    endDate: z.number(),
    noOfCopies: z.number(),
    dateMod: z.number(),
    userMod: z.number(),
    createdAt: z.number(),
    Agreement: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    agreementId: z.number().nullable(),
    eventCode: z.number().nullable(),
    noOfCopies: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    agreementId: z.number().nullable(),
    eventCode: z.number().nullable(),
    noOfCopies: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    eventCode: z.number().int().nullable(),
    eventDate: z.date().nullable(),
    endDate: z.date().nullable(),
    noOfCopies: z.number().int().nullable(),
    dateMod: z.date().nullable(),
    userMod: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    eventCode: z.number().int().nullable(),
    eventDate: z.date().nullable(),
    endDate: z.date().nullable(),
    noOfCopies: z.number().int().nullable(),
    dateMod: z.date().nullable(),
    userMod: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));