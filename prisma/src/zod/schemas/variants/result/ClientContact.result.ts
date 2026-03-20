import * as z from 'zod';
// prettier-ignore
export const ClientContactResultSchema = z.object({
    id: z.number().int(),
    contactId: z.number().int(),
    clientId: z.number().int(),
    isDefault: z.boolean(),
    createdAt: z.date(),
    Contact: z.unknown(),
    Client: z.unknown()
}).strict();

export type ClientContactResultType = z.infer<typeof ClientContactResultSchema>;
