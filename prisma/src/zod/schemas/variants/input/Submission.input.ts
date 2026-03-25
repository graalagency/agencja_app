import * as z from 'zod';
// prettier-ignore
export const SubmissionInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    titleId: z.number().int().optional().nullable(),
    publisherId: z.number().int().optional().nullable(),
    contactId: z.number().int().optional().nullable(),
    copyTypeId: z.number().int().optional().nullable(),
    submSentTypeId: z.number().int().optional().nullable(),
    submDate: z.date(),
    sentDate: z.date().optional().nullable(),
    endDate: z.date().optional().nullable(),
    returnDate: z.date().optional().nullable(),
    noOfCopies: z.number().int().optional().nullable(),
    trackingNo: z.string().optional().nullable(),
    exclusive: z.boolean(),
    submNr: z.number().int().optional().nullable(),
    status: z.string().optional().nullable(),
    remarks: z.string().optional().nullable(),
    userMod: z.string().optional().nullable(),
    dateMod: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Title: z.unknown().optional().nullable(),
    Publisher: z.unknown().optional().nullable(),
    Events: z.array(z.unknown())
}).strict();

export type SubmissionInputType = z.infer<typeof SubmissionInputSchema>;
