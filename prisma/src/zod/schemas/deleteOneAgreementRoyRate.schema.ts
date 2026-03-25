import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './objects/AgreementRoyRateInclude.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './objects/AgreementRoyRateWhereUniqueInput.schema';

export const AgreementRoyRateDeleteOneSchema: z.ZodType<Prisma.AgreementRoyRateDeleteArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), where: AgreementRoyRateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateDeleteArgs>;

export const AgreementRoyRateDeleteOneZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), where: AgreementRoyRateWhereUniqueInputObjectSchema }).strict();