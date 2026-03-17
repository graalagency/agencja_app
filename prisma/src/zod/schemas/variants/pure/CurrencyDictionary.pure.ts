import * as z from 'zod';
// prettier-ignore
export const CurrencyDictionaryModelSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CurrencyDictionaryPureType = z.infer<typeof CurrencyDictionaryModelSchema>;
