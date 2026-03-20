import * as z from 'zod';
export const TaxResidenceSendAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    certId: z.number(),
    clientId: z.number(),
    publisherId: z.number(),
    dateSend: z.number(),
    sendOrig: z.number(),
    sendCopy: z.number(),
    createdAt: z.number(),
    Cert: z.number(),
    Client: z.number(),
    Publisher: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    certId: z.number().nullable(),
    clientId: z.number().nullable(),
    publisherId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    certId: z.number().nullable(),
    clientId: z.number().nullable(),
    publisherId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    certId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    dateSend: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    certId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    dateSend: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});