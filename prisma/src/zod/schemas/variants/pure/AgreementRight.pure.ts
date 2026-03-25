import * as z from 'zod';
// prettier-ignore
export const AgreementRightModelSchema = z.object({
    id: z.number().int(),
    sourceId: z.number().int().nullable(),
    agreementId: z.number().int(),
    rightFormId: z.number().int().nullable(),
    priceTypeId: z.number().int().nullable(),
    royPriceTypeId: z.number().int().nullable(),
    royAccountIntervalId: z.number().int().nullable(),
    distributionTypeId: z.number().int().nullable(),
    Agreement: z.unknown(),
    RoyRates: z.array(z.unknown())
}).strict();

export type AgreementRightPureType = z.infer<typeof AgreementRightModelSchema>;
