import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './objects/AgreementRoyRateInclude.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './objects/AgreementRoyRateWhereUniqueInput.schema';

export const AgreementRoyRateFindUniqueOrThrowSchema: z.ZodType<Prisma.AgreementRoyRateFindUniqueOrThrowArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), where: AgreementRoyRateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateFindUniqueOrThrowArgs>;

export const AgreementRoyRateFindUniqueOrThrowZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), where: AgreementRoyRateWhereUniqueInputObjectSchema }).strict();