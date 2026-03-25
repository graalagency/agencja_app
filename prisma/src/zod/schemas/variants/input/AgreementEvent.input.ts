import * as z from 'zod';
// prettier-ignore
export const AgreementEventInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    agreementId: z.number().int(),
    eventCode: z.number().int(),
    eventDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    noOfCopies: z.number().int().optional().nullable(),
    dateMod: z.date().optional().nullable(),
    userMod: z.string().optional().nullable(),
    createdAt: z.date(),
    Agreement: z.unknown()
}).strict();

export type AgreementEventInputType = z.infer<typeof AgreementEventInputSchema>;
