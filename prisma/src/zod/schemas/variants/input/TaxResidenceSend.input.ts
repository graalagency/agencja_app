import * as z from 'zod';
// prettier-ignore
export const TaxResidenceSendInputSchema = z.object({
    id: z.number().int(),
    certId: z.number().int(),
    clientId: z.number().int().optional().nullable(),
    publisherId: z.number().int().optional().nullable(),
    dateSend: z.date().optional().nullable(),
    sendOrig: z.boolean(),
    sendCopy: z.boolean(),
    createdAt: z.date(),
    Cert: z.unknown(),
    Client: z.unknown().optional().nullable(),
    Publisher: z.unknown().optional().nullable()
}).strict();

export type TaxResidenceSendInputType = z.infer<typeof TaxResidenceSendInputSchema>;
