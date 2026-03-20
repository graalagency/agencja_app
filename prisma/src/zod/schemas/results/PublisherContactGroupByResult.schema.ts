import * as z from 'zod';
export const PublisherContactGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  publisherId: z.number().int(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    contactId: z.number(),
    publisherId: z.number(),
    isDefault: z.number(),
    createdAt: z.number(),
    Contact: z.number(),
    Publisher: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    contactId: z.number().nullable(),
    publisherId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    contactId: z.number().nullable(),
    publisherId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    contactId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    contactId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));