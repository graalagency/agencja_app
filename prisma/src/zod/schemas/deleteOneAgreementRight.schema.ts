import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';

export const AgreementRightDeleteOneSchema: z.ZodType<Prisma.AgreementRightDeleteArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRightDeleteArgs>;

export const AgreementRightDeleteOneZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema }).strict();