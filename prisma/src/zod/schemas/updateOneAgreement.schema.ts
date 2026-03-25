import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementIncludeObjectSchema as AgreementIncludeObjectSchema } from './objects/AgreementInclude.schema';
import { AgreementUpdateInputObjectSchema as AgreementUpdateInputObjectSchema } from './objects/AgreementUpdateInput.schema';
import { AgreementUncheckedUpdateInputObjectSchema as AgreementUncheckedUpdateInputObjectSchema } from './objects/AgreementUncheckedUpdateInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';

export const AgreementUpdateOneSchema: z.ZodType<Prisma.AgreementUpdateArgs> = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), data: z.union([AgreementUpdateInputObjectSchema, AgreementUncheckedUpdateInputObjectSchema]), where: AgreementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementUpdateArgs>;

export const AgreementUpdateOneZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), data: z.union([AgreementUpdateInputObjectSchema, AgreementUncheckedUpdateInputObjectSchema]), where: AgreementWhereUniqueInputObjectSchema }).strict();