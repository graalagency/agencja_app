import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightUpdateInputObjectSchema as AgreementRightUpdateInputObjectSchema } from './objects/AgreementRightUpdateInput.schema';
import { AgreementRightUncheckedUpdateInputObjectSchema as AgreementRightUncheckedUpdateInputObjectSchema } from './objects/AgreementRightUncheckedUpdateInput.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';

export const AgreementRightUpdateOneSchema: z.ZodType<Prisma.AgreementRightUpdateArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), data: z.union([AgreementRightUpdateInputObjectSchema, AgreementRightUncheckedUpdateInputObjectSchema]), where: AgreementRightWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRightUpdateArgs>;

export const AgreementRightUpdateOneZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), data: z.union([AgreementRightUpdateInputObjectSchema, AgreementRightUncheckedUpdateInputObjectSchema]), where: AgreementRightWhereUniqueInputObjectSchema }).strict();