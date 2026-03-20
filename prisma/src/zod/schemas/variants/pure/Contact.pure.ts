import * as z from 'zod';
// prettier-ignore
export const ContactModelSchema = z.object({
    id: z.number().int(),
    phoneNumber: z.string().nullable(),
    firstName: z.string(),
    middleName: z.string().nullable(),
    lastName: z.string(),
    informal: z.number().int(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable(),
    photos: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ClientContact: z.array(z.unknown()),
    PublisherContact: z.array(z.unknown())
}).strict();

export type ContactPureType = z.infer<typeof ContactModelSchema>;
