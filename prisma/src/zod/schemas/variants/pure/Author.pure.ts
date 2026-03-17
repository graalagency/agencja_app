import * as z from 'zod';
// prettier-ignore
export const AuthorModelSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    middleName: z.string().nullable(),
    lastName: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    photos: z.unknown().nullable(),
    personalEmail: z.string().nullable(),
    workEmail: z.string().nullable(),
    clientId: z.number().int().nullable(),
    Client: z.unknown().nullable()
}).strict();

export type AuthorPureType = z.infer<typeof AuthorModelSchema>;
