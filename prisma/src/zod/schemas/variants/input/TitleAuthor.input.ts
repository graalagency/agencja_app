import * as z from 'zod';
// prettier-ignore
export const TitleAuthorInputSchema = z.object({
    titleId: z.number().int(),
    authorId: z.number().int(),
    isMain: z.boolean(),
    order: z.number().int(),
    Title: z.unknown(),
    Author: z.unknown()
}).strict();

export type TitleAuthorInputType = z.infer<typeof TitleAuthorInputSchema>;
