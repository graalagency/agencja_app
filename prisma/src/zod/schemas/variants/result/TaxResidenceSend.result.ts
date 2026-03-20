import * as z from 'zod';
// prettier-ignore
export const TaxResidenceSendResultSchema = z.object({
    id: z.number().int(),
    certId: z.number().int(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    dateSend: z.date().nullable(),
    sendOrig: z.boolean(),
    sendCopy: z.boolean(),
    createdAt: z.date(),
    Cert: z.unknown(),
    Client: z.unknown().nullable(),
    Publisher: z.unknown().nullable()
}).strict();

export type TaxResidenceSendResultType = z.infer<typeof TaxResidenceSendResultSchema>;
