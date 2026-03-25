import * as z from 'zod';
// prettier-ignore
export const AgreementRightInputSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().optional().nullable(),
    agreementId: z.number().int(),
    rightFormId: z.number().int().optional().nullable(),
    priceTypeId: z.number().int().optional().nullable(),
    royPriceTypeId: z.number().int().optional().nullable(),
    royAccountIntervalId: z.number().int().optional().nullable(),
    distributionTypeId: z.number().int().optional().nullable(),
    Agreement: z.unknown(),
    RoyRates: z.array(z.unknown())
}).strict();

export type AgreementRightInputType = z.infer<typeof AgreementRightInputSchema>;
