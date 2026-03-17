import * as z from 'zod';
// prettier-ignore
export const CurrencyDictionaryResultSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CurrencyDictionaryResultType = z.infer<typeof CurrencyDictionaryResultSchema>;
