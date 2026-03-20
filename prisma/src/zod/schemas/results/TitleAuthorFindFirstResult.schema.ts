import * as z from 'zod';
export const TitleAuthorFindFirstResultSchema = z.nullable(z.object({
  titleId: z.number().int(),
  authorId: z.number().int(),
  isMain: z.boolean(),
  order: z.number().int(),
  Title: z.unknown(),
  Author: z.unknown()
}));