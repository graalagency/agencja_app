import * as z from 'zod';
// prettier-ignore
export const PublisherContactResultSchema = z.object({
    id: z.number().int(),
    contactId: z.number().int(),
    publisherId: z.number().int(),
    isDefault: z.boolean(),
    createdAt: z.date(),
    Contact: z.unknown(),
    Publisher: z.unknown()
}).strict();

export type PublisherContactResultType = z.infer<typeof PublisherContactResultSchema>;
