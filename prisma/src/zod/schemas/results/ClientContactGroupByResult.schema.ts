import * as z from 'zod';
export const ClientContactGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  clientId: z.number().int(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    contactId: z.number(),
    clientId: z.number(),
    isDefault: z.number(),
    createdAt: z.number(),
    Contact: z.number(),
    Client: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    contactId: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    contactId: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    contactId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    contactId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));