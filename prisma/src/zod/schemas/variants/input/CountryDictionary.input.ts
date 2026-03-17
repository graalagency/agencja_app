import * as z from 'zod';
// prettier-ignore
export const CountryDictionaryInputSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    code: z.string(),
    tax: z.number(),
    eu: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CountryDictionaryInputType = z.infer<typeof CountryDictionaryInputSchema>;
