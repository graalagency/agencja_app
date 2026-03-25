import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './objects/AgreementAdvanceSelect.schema';
import { AgreementAdvanceIncludeObjectSchema as AgreementAdvanceIncludeObjectSchema } from './objects/AgreementAdvanceInclude.schema';
import { AgreementAdvanceUpdateInputObjectSchema as AgreementAdvanceUpdateInputObjectSchema } from './objects/AgreementAdvanceUpdateInput.schema';
import { AgreementAdvanceUncheckedUpdateInputObjectSchema as AgreementAdvanceUncheckedUpdateInputObjectSchema } from './objects/AgreementAdvanceUncheckedUpdateInput.schema';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './objects/AgreementAdvanceWhereUniqueInput.schema';

export const AgreementAdvanceUpdateOneSchema: z.ZodType<Prisma.AgreementAdvanceUpdateArgs> = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), data: z.union([AgreementAdvanceUpdateInputObjectSchema, AgreementAdvanceUncheckedUpdateInputObjectSchema]), where: AgreementAdvanceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceUpdateArgs>;

export const AgreementAdvanceUpdateOneZodSchema = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), data: z.union([AgreementAdvanceUpdateInputObjectSchema, AgreementAdvanceUncheckedUpdateInputObjectSchema]), where: AgreementAdvanceWhereUniqueInputObjectSchema }).strict();