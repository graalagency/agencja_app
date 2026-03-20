import * as z from 'zod';
export const TitleAuthorFindManyResultSchema = z.object({
  data: z.array(z.object({
  titleId: z.number().int(),
  authorId: z.number().int(),
  isMain: z.boolean(),
  order: z.number().int(),
  Title: z.unknown(),
  Author: z.unknown()
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