import * as z from 'zod';
// prettier-ignore
export const DictCurrencyResultSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DictCurrencyResultType = z.infer<typeof DictCurrencyResultSchema>;
