import * as z from 'zod';
// prettier-ignore
export const PublisherModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    address: z.string().nullable(),
    bankAccount: z.string().nullable(),
    city: z.string().nullable(),
    country: z.string().nullable(),
    legalForm: z.string().nullable(),
    nip: z.string().nullable(),
    notes: z.string().nullable(),
    postalCode: z.string().nullable(),
    regon: z.string().nullable()
}).strict();

export type PublisherPureType = z.infer<typeof PublisherModelSchema>;
