import * as z from 'zod';
// prettier-ignore
export const AgreementAdvanceInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    agreementId: z.number().int(),
    instalment: z.number().int().optional().nullable(),
    advTermId: z.number().int().optional().nullable(),
    advTypeId: z.number().int().optional().nullable(),
    amount: z.number(),
    termDate: z.date().optional().nullable(),
    royaltyId: z.number().int().optional().nullable(),
    createdAt: z.date(),
    Agreement: z.unknown()
}).strict();

export type AgreementAdvanceInputType = z.infer<typeof AgreementAdvanceInputSchema>;
