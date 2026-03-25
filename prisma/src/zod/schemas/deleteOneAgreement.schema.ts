import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementIncludeObjectSchema as AgreementIncludeObjectSchema } from './objects/AgreementInclude.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';

export const AgreementDeleteOneSchema: z.ZodType<Prisma.AgreementDeleteArgs> = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), where: AgreementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementDeleteArgs>;

export const AgreementDeleteOneZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), where: AgreementWhereUniqueInputObjectSchema }).strict();