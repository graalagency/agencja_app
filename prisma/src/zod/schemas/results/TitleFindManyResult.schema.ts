import * as z from 'zod';
export const TitleFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  clientId: z.number().int().optional(),
  publisherId: z.number().int().optional(),
  title: z.string(),
  isbn: z.string().optional(),
  languageCode: z.string().optional(),
  classCode: z.string().optional(),
  edition: z.number().int().optional(),
  pages: z.number().int().optional(),
  copyrightYear: z.string().optional(),
  copyrightOwner: z.string().optional(),
  keywords: z.string().optional(),
  volume: z.number().int().optional(),
  totalVolumes: z.number().int().optional(),
  isHit: z.boolean(),
  isCollection: z.boolean(),
  isCD: z.boolean(),
  notes: z.string().optional(),
  dateOfReceipt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Client: z.unknown().optional(),
  Publisher: z.unknown().optional(),
  TitleAuthors: z.array(z.unknown())
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