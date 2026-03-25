import * as z from 'zod';
// prettier-ignore
export const AgreementRoyRateResultSchema = z.object({
    id: z.number().int(),
    agreementId: z.number().int(),
    rightId: z.number().int(),
    step: z.number().int(),
    copiesMax: z.number().int().nullable(),
    rate: z.number(),
    Agreement: z.unknown(),
    Right: z.unknown()
}).strict();

export type AgreementRoyRateResultType = z.infer<typeof AgreementRoyRateResultSchema>;
