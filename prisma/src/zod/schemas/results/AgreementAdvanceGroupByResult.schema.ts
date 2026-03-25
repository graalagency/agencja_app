import * as z from 'zod';
export const AgreementAdvanceGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int(),
  agreementId: z.number().int(),
  instalment: z.number().int(),
  advTermId: z.number().int(),
  advTypeId: z.number().int(),
  amount: z.number(),
  termDate: z.date(),
  royaltyId: z.number().int(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    sourceId: z.number(),
    agreementId: z.number(),
    instalment: z.number(),
    advTermId: z.number(),
    advTypeId: z.number(),
    amount: z.number(),
    termDate: z.number(),
    royaltyId: z.number(),
    createdAt: z.number(),
    Agreement: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    agreementId: z.number().nullable(),
    instalment: z.number().nullable(),
    advTermId: z.number().nullable(),
    advTypeId: z.number().nullable(),
    amount: z.number().nullable(),
    royaltyId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    agreementId: z.number().nullable(),
    instalment: z.number().nullable(),
    advTermId: z.number().nullable(),
    advTypeId: z.number().nullable(),
    amount: z.number().nullable(),
    royaltyId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    instalment: z.number().int().nullable(),
    advTermId: z.number().int().nullable(),
    advTypeId: z.number().int().nullable(),
    amount: z.number().nullable(),
    termDate: z.date().nullable(),
    royaltyId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    instalment: z.number().int().nullable(),
    advTermId: z.number().int().nullable(),
    advTypeId: z.number().int().nullable(),
    amount: z.number().nullable(),
    termDate: z.date().nullable(),
    royaltyId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));