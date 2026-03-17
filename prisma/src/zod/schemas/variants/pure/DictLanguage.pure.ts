import * as z from 'zod';
// prettier-ignore
export const DictLanguageModelSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DictLanguagePureType = z.infer<typeof DictLanguageModelSchema>;
