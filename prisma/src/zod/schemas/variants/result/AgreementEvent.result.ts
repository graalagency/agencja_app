import * as z from 'zod';
// prettier-ignore
export const AgreementEventResultSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int(),
    eventCode: z.number().int(),
    eventDate: z.date().nullable(),
    endDate: z.date().nullable(),
    noOfCopies: z.number().int().nullable(),
    dateMod: z.date().nullable(),
    userMod: z.string().nullable(),
    createdAt: z.date(),
    Agreement: z.unknown()
}).strict();

export type AgreementEventResultType = z.infer<typeof AgreementEventResultSchema>;
