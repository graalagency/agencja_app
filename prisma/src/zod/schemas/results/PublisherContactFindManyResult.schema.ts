import * as z from 'zod';
export const PublisherContactFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  publisherId: z.number().int(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  Contact: z.unknown(),
  Publisher: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});