import * as z from 'zod';
// prettier-ignore
export const AuthorInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    firstName: z.string(),
    middleName: z.string().optional().nullable(),
    lastName: z.string(),
    suffix: z.string().optional().nullable(),
    penName: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    photos: z.unknown().optional().nullable(),
    personalEmail: z.string().optional().nullable(),
    workEmail: z.string().optional().nullable(),
    clientId: z.number().int().optional().nullable(),
    Client: z.unknown().optional().nullable(),
    TitleAuthors: z.array(z.unknown())
}).strict();

export type AuthorInputType = z.infer<typeof AuthorInputSchema>;
