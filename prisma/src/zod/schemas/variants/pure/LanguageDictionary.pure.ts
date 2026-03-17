import * as z from 'zod';
// prettier-ignore
export const LanguageDictionaryModelSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type LanguageDictionaryPureType = z.infer<typeof LanguageDictionaryModelSchema>;
