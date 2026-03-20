import * as z from 'zod';
// prettier-ignore
export const PublisherContactInputSchema = z.object({
    id: z.number().int(),
    contactId: z.number().int(),
    publisherId: z.number().int(),
    isDefault: z.boolean(),
    createdAt: z.date(),
    Contact: z.unknown(),
    Publisher: z.unknown()
}).strict();

export type PublisherContactInputType = z.infer<typeof PublisherContactInputSchema>;
