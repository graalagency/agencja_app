import * as z from 'zod';
// prettier-ignore
export const ClientContactModelSchema = z.object({
    id: z.number().int(),
    contactId: z.number().int(),
    clientId: z.number().int(),
    isDefault: z.boolean(),
    createdAt: z.date(),
    Contact: z.unknown(),
    Client: z.unknown()
}).strict();

export type ClientContactPureType = z.infer<typeof ClientContactModelSchema>;
