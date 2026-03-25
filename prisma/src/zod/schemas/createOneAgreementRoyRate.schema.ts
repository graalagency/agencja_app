import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './objects/AgreementRoyRateInclude.schema';
import { AgreementRoyRateCreateInputObjectSchema as AgreementRoyRateCreateInputObjectSchema } from './objects/AgreementRoyRateCreateInput.schema';
import { AgreementRoyRateUncheckedCreateInputObjectSchema as AgreementRoyRateUncheckedCreateInputObjectSchema } from './objects/AgreementRoyRateUncheckedCreateInput.schema';

export const AgreementRoyRateCreateOneSchema: z.ZodType<Prisma.AgreementRoyRateCreateArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), data: z.union([AgreementRoyRateCreateInputObjectSchema, AgreementRoyRateUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateArgs>;

export const AgreementRoyRateCreateOneZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), data: z.union([AgreementRoyRateCreateInputObjectSchema, AgreementRoyRateUncheckedCreateInputObjectSchema]) }).strict();