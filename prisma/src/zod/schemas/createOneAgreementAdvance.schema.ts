import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './objects/AgreementAdvanceSelect.schema';
import { AgreementAdvanceIncludeObjectSchema as AgreementAdvanceIncludeObjectSchema } from './objects/AgreementAdvanceInclude.schema';
import { AgreementAdvanceCreateInputObjectSchema as AgreementAdvanceCreateInputObjectSchema } from './objects/AgreementAdvanceCreateInput.schema';
import { AgreementAdvanceUncheckedCreateInputObjectSchema as AgreementAdvanceUncheckedCreateInputObjectSchema } from './objects/AgreementAdvanceUncheckedCreateInput.schema';

export const AgreementAdvanceCreateOneSchema: z.ZodType<Prisma.AgreementAdvanceCreateArgs> = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), data: z.union([AgreementAdvanceCreateInputObjectSchema, AgreementAdvanceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceCreateArgs>;

export const AgreementAdvanceCreateOneZodSchema = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), data: z.union([AgreementAdvanceCreateInputObjectSchema, AgreementAdvanceUncheckedCreateInputObjectSchema]) }).strict();