import * as z from 'zod';
// prettier-ignore
export const TaxResidenceCertInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    clientId: z.number().int().optional().nullable(),
    publisherId: z.number().int().optional().nullable(),
    validDate: z.date(),
    requestDate: z.date().optional().nullable(),
    receiveDate: z.date().optional().nullable(),
    hasCert: z.boolean(),
    notes: z.string().optional().nullable(),
    fileData: z.instanceof(Uint8Array).optional().nullable(),
    fileName: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Client: z.unknown().optional().nullable(),
    Publisher: z.unknown().optional().nullable(),
    SendLog: z.array(z.unknown())
}).strict();

export type TaxResidenceCertInputType = z.infer<typeof TaxResidenceCertInputSchema>;
