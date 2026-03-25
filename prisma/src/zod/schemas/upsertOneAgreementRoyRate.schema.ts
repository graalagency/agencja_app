import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateIncludeObjectSchema as AgreementRoyRateIncludeObjectSchema } from './objects/AgreementRoyRateInclude.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './objects/AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateCreateInputObjectSchema as AgreementRoyRateCreateInputObjectSchema } from './objects/AgreementRoyRateCreateInput.schema';
import { AgreementRoyRateUncheckedCreateInputObjectSchema as AgreementRoyRateUncheckedCreateInputObjectSchema } from './objects/AgreementRoyRateUncheckedCreateInput.schema';
import { AgreementRoyRateUpdateInputObjectSchema as AgreementRoyRateUpdateInputObjectSchema } from './objects/AgreementRoyRateUpdateInput.schema';
import { AgreementRoyRateUncheckedUpdateInputObjectSchema as AgreementRoyRateUncheckedUpdateInputObjectSchema } from './objects/AgreementRoyRateUncheckedUpdateInput.schema';

export const AgreementRoyRateUpsertOneSchema: z.ZodType<Prisma.AgreementRoyRateUpsertArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), where: AgreementRoyRateWhereUniqueInputObjectSchema, create: z.union([ AgreementRoyRateCreateInputObjectSchema, AgreementRoyRateUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementRoyRateUpdateInputObjectSchema, AgreementRoyRateUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateUpsertArgs>;

export const AgreementRoyRateUpsertOneZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), include: AgreementRoyRateIncludeObjectSchema.optional(), where: AgreementRoyRateWhereUniqueInputObjectSchema, create: z.union([ AgreementRoyRateCreateInputObjectSchema, AgreementRoyRateUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementRoyRateUpdateInputObjectSchema, AgreementRoyRateUncheckedUpdateInputObjectSchema ]) }).strict();