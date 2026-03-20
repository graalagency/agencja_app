import * as z from 'zod';
// prettier-ignore
export const ContactInputSchema = z.object({
    id: z.number().int(),
    phoneNumber: z.string().optional().nullable(),
    firstName: z.string(),
    middleName: z.string().optional().nullable(),
    lastName: z.string(),
    informal: z.number().int(),
    fax: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    contactPosition: z.string().optional().nullable(),
    accountant: z.number().int().optional().nullable(),
    photos: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ClientContact: z.array(z.unknown()),
    PublisherContact: z.array(z.unknown())
}).strict();

export type ContactInputType = z.infer<typeof ContactInputSchema>;
