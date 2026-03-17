import * as z from 'zod';
// prettier-ignore
export const ClientInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    address: z.string().optional().nullable(),
    bankAccount: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    legalForm: z.string().optional().nullable(),
    nip: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    postalCode: z.string().optional().nullable(),
    regon: z.string().optional().nullable(),
    Author: z.array(z.unknown()),
    Contact: z.array(z.unknown()),
    Document: z.array(z.unknown()),
    Invoice: z.array(z.unknown())
}).strict();

export type ClientInputType = z.infer<typeof ClientInputSchema>;
