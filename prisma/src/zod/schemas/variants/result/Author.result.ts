import * as z from 'zod';
// prettier-ignore
export const AuthorResultSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    firstName: z.string(),
    middleName: z.string().nullable(),
    lastName: z.string(),
    suffix: z.string().nullable(),
    penName: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    photos: z.unknown().nullable(),
    personalEmail: z.string().nullable(),
    workEmail: z.string().nullable(),
    clientId: z.number().int().nullable(),
    Client: z.unknown().nullable(),
    TitleAuthors: z.array(z.unknown())
}).strict();

export type AuthorResultType = z.infer<typeof AuthorResultSchema>;
