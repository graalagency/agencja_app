import * as z from 'zod';
export const AgreementRightGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int(),
  agreementId: z.number().int(),
  rightFormId: z.number().int(),
  priceTypeId: z.number().int(),
  royPriceTypeId: z.number().int(),
  royAccountIntervalId: z.number().int(),
  distributionTypeId: z.number().int(),
  _count: z.object({
    id: z.number(),
    sourceId: z.number(),
    agreementId: z.number(),
    rightFormId: z.number(),
    priceTypeId: z.number(),
    royPriceTypeId: z.number(),
    royAccountIntervalId: z.number(),
    distributionTypeId: z.number(),
    Agreement: z.number(),
    RoyRates: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    agreementId: z.number().nullable(),
    rightFormId: z.number().nullable(),
    priceTypeId: z.number().nullable(),
    royPriceTypeId: z.number().nullable(),
    royAccountIntervalId: z.number().nullable(),
    distributionTypeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    agreementId: z.number().nullable(),
    rightFormId: z.number().nullable(),
    priceTypeId: z.number().nullable(),
    royPriceTypeId: z.number().nullable(),
    royAccountIntervalId: z.number().nullable(),
    distributionTypeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    rightFormId: z.number().int().nullable(),
    priceTypeId: z.number().int().nullable(),
    royPriceTypeId: z.number().int().nullable(),
    royAccountIntervalId: z.number().int().nullable(),
    distributionTypeId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int().nullable(),
    rightFormId: z.number().int().nullable(),
    priceTypeId: z.number().int().nullable(),
    royPriceTypeId: z.number().int().nullable(),
    royAccountIntervalId: z.number().int().nullable(),
    distributionTypeId: z.number().int().nullable()
  }).nullable().optional()
}));