import * as z from 'zod';
// prettier-ignore
export const AuthorInputSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    middleName: z.string().optional().nullable(),
    lastName: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    photos: z.unknown().optional().nullable(),
    personalEmail: z.string().optional().nullable(),
    workEmail: z.string().optional().nullable(),
    clientId: z.number().int().optional().nullable(),
    Client: z.unknown().optional().nullable()
}).strict();

export type AuthorInputType = z.infer<typeof AuthorInputSchema>;
