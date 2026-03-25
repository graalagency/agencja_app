import * as z from 'zod';
export const AgreementRoyRateAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    agreementId: z.number(),
    rightId: z.number(),
    step: z.number(),
    copiesMax: z.number(),
    rate: z.number(),
    Agreement: z.number(),
    Right: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    agreementId: z.number().nullable(),
    rightId: z.number().nullable(),
    step: z.number().nullable(),
    copiesMax: z.number().nullable(),
    rate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    agreementId: z.number().nullable(),
    rightId: z.number().nullable(),
    step: z.number().nullable(),
    copiesMax: z.number().nullable(),
    rate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    rightId: z.number().int().nullable(),
    step: z.number().int().nullable(),
    copiesMax: z.number().int().nullable(),
    rate: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    rightId: z.number().int().nullable(),
    step: z.number().int().nullable(),
    copiesMax: z.number().int().nullable(),
    rate: z.number().nullable()
  }).nullable().optional()});