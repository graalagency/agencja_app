import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './objects/AgreementRoyRateInclude.schema';
import { AgreementRoyRateUpdateInputObjectSchema as AgreementRoyRateUpdateInputObjectSchema } from './objects/AgreementRoyRateUpdateInput.schema';
import { AgreementRoyRateUncheckedUpdateInputObjectSchema as AgreementRoyRateUncheckedUpdateInputObjectSchema } from './objects/AgreementRoyRateUncheckedUpdateInput.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './objects/AgreementRoyRateWhereUniqueInput.schema';

export const AgreementRoyRateUpdateOneSchema: z.ZodType<Prisma.AgreementRoyRateUpdateArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), data: z.union([AgreementRoyRateUpdateInputObjectSchema, AgreementRoyRateUncheckedUpdateInputObjectSchema]), where: AgreementRoyRateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateArgs>;

export const AgreementRoyRateUpdateOneZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), data: z.union([AgreementRoyRateUpdateInputObjectSchema, AgreementRoyRateUncheckedUpdateInputObjectSchema]), where: AgreementRoyRateWhereUniqueInputObjectSchema }).strict();