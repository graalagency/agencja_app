import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightCreateInputObjectSchema as AgreementRightCreateInputObjectSchema } from './objects/AgreementRightCreateInput.schema';
import { AgreementRightUncheckedCreateInputObjectSchema as AgreementRightUncheckedCreateInputObjectSchema } from './objects/AgreementRightUncheckedCreateInput.schema';

export const AgreementRightCreateOneSchema: z.ZodType<Prisma.AgreementRightCreateArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), data: z.union([AgreementRightCreateInputObjectSchema, AgreementRightUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgreementRightCreateArgs>;

export const AgreementRightCreateOneZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), data: z.union([AgreementRightCreateInputObjectSchema, AgreementRightUncheckedCreateInputObjectSchema]) }).strict();