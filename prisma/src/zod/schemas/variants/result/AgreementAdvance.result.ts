import * as z from 'zod';
// prettier-ignore
export const AgreementAdvanceResultSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int(),
    instalment: z.number().int().nullable(),
    advTermId: z.number().int().nullable(),
    advTypeId: z.number().int().nullable(),
    amount: z.number(),
    termDate: z.date().nullable(),
    royaltyId: z.number().int().nullable(),
    createdAt: z.date(),
    Agreement: z.unknown()
}).strict();

export type AgreementAdvanceResultType = z.infer<typeof AgreementAdvanceResultSchema>;
