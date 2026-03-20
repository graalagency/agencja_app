import * as z from 'zod';
export const TaxResidenceCertAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    sourceId: z.number(),
    clientId: z.number(),
    publisherId: z.number(),
    validDate: z.number(),
    requestDate: z.number(),
    receiveDate: z.number(),
    hasCert: z.number(),
    notes: z.number(),
    fileData: z.number(),
    fileName: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    Client: z.number(),
    Publisher: z.number(),
    SendLog: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    clientId: z.number().nullable(),
    publisherId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    clientId: z.number().nullable(),
    publisherId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    validDate: z.date().nullable(),
    requestDate: z.date().nullable(),
    receiveDate: z.date().nullable(),
    notes: z.string().nullable(),
    fileName: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    validDate: z.date().nullable(),
    requestDate: z.date().nullable(),
    receiveDate: z.date().nullable(),
    notes: z.string().nullable(),
    fileName: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});