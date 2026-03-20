import * as z from 'zod';
// prettier-ignore
export const TitleInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    clientId: z.number().int().optional().nullable(),
    publisherId: z.number().int().optional().nullable(),
    title: z.string(),
    isbn: z.string().optional().nullable(),
    languageCode: z.string().optional().nullable(),
    classCode: z.string().optional().nullable(),
    edition: z.number().int().optional().nullable(),
    pages: z.number().int().optional().nullable(),
    copyrightYear: z.string().optional().nullable(),
    copyrightOwner: z.string().optional().nullable(),
    keywords: z.string().optional().nullable(),
    volume: z.number().int().optional().nullable(),
    totalVolumes: z.number().int().optional().nullable(),
    isHit: z.boolean(),
    isCollection: z.boolean(),
    isCD: z.boolean(),
    notes: z.string().optional().nullable(),
    dateOfReceipt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Client: z.unknown().optional().nullable(),
    Publisher: z.unknown().optional().nullable(),
    TitleAuthors: z.array(z.unknown())
}).strict();

export type TitleInputType = z.infer<typeof TitleInputSchema>;
