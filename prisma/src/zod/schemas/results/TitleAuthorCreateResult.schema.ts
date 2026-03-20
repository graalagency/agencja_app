import * as z from 'zod';
export const TitleAuthorCreateResultSchema = z.object({
  titleId: z.number().int(),
  authorId: z.number().int(),
  isMain: z.boolean(),
  order: z.number().int(),
  Title: z.unknown(),
  Author: z.unknown()
});