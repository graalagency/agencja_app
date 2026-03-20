import * as z from 'zod';
// prettier-ignore
export const TitleResultSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    title: z.string(),
    isbn: z.string().nullable(),
    languageCode: z.string().nullable(),
    classCode: z.string().nullable(),
    edition: z.number().int().nullable(),
    pages: z.number().int().nullable(),
    copyrightYear: z.string().nullable(),
    copyrightOwner: z.string().nullable(),
    keywords: z.string().nullable(),
    volume: z.number().int().nullable(),
    totalVolumes: z.number().int().nullable(),
    isHit: z.boolean(),
    isCollection: z.boolean(),
    isCD: z.boolean(),
    notes: z.string().nullable(),
    dateOfReceipt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Client: z.unknown().nullable(),
    Publisher: z.unknown().nullable(),
    TitleAuthors: z.array(z.unknown())
}).strict();

export type TitleResultType = z.infer<typeof TitleResultSchema>;
