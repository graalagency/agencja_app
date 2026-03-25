import * as z from 'zod';
// prettier-ignore
export const SubmissionModelSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    titleId: z.number().int().nullable(),
    publisherId: z.number().int().nullable(),
    contactId: z.number().int().nullable(),
    copyTypeId: z.number().int().nullable(),
    submSentTypeId: z.number().int().nullable(),
    submDate: z.date(),
    sentDate: z.date().nullable(),
    endDate: z.date().nullable(),
    returnDate: z.date().nullable(),
    noOfCopies: z.number().int().nullable(),
    trackingNo: z.string().nullable(),
    exclusive: z.boolean(),
    submNr: z.number().int().nullable(),
    status: z.string().nullable(),
    remarks: z.string().nullable(),
    userMod: z.string().nullable(),
    dateMod: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Title: z.unknown().nullable(),
    Publisher: z.unknown().nullable(),
    Events: z.array(z.unknown())
}).strict();

export type SubmissionPureType = z.infer<typeof SubmissionModelSchema>;
