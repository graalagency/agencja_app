import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementIncludeObjectSchema as AgreementIncludeObjectSchema } from './objects/AgreementInclude.schema';
import { AgreementCreateInputObjectSchema as AgreementCreateInputObjectSchema } from './objects/AgreementCreateInput.schema';
import { AgreementUncheckedCreateInputObjectSchema as AgreementUncheckedCreateInputObjectSchema } from './objects/AgreementUncheckedCreateInput.schema';

export const AgreementCreateOneSchema: z.ZodType<Prisma.AgreementCreateArgs> = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), data: z.union([AgreementCreateInputObjectSchema, AgreementUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgreementCreateArgs>;

export const AgreementCreateOneZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), data: z.union([AgreementCreateInputObjectSchema, AgreementUncheckedCreateInputObjectSchema]) }).strict();