import * as z from 'zod';
export const TitleAuthorGroupByResultSchema = z.array(z.object({
  titleId: z.number().int(),
  authorId: z.number().int(),
  isMain: z.boolean(),
  order: z.number().int(),
  _count: z.object({
    titleId: z.number(),
    authorId: z.number(),
    isMain: z.number(),
    order: z.number(),
    Title: z.number(),
    Author: z.number()
  }).optional(),
  _sum: z.object({
    titleId: z.number().nullable(),
    authorId: z.number().nullable(),
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    titleId: z.number().nullable(),
    authorId: z.number().nullable(),
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    titleId: z.number().int().nullable(),
    authorId: z.number().int().nullable(),
    order: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    titleId: z.number().int().nullable(),
    authorId: z.number().int().nullable(),
    order: z.number().int().nullable()
  }).nullable().optional()
}));