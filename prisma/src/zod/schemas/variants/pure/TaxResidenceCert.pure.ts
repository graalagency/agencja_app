import * as z from 'zod';
// prettier-ignore
export const TaxResidenceCertModelSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    validDate: z.date(),
    requestDate: z.date().nullable(),
    receiveDate: z.date().nullable(),
    hasCert: z.boolean(),
    notes: z.string().nullable(),
    fileData: z.instanceof(Uint8Array).nullable(),
    fileName: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Client: z.unknown().nullable(),
    Publisher: z.unknown().nullable(),
    SendLog: z.array(z.unknown())
}).strict();

export type TaxResidenceCertPureType = z.infer<typeof TaxResidenceCertModelSchema>;
