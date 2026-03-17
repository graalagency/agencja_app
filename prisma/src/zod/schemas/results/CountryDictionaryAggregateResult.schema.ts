import * as z from 'zod';
export const CountryDictionaryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    description: z.number(),
    code: z.number(),
    tax: z.number(),
    eu: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    tax: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    tax: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    description: z.string().nullable(),
    code: z.string().nullable(),
    tax: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    description: z.string().nullable(),
    code: z.string().nullable(),
    tax: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});