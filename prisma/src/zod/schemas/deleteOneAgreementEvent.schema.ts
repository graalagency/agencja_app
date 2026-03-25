import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './objects/AgreementEventSelect.schema';
import { AgreementEventIncludeObjectSchema as AgreementEventIncludeObjectSchema } from './objects/AgreementEventInclude.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './objects/AgreementEventWhereUniqueInput.schema';

export const AgreementEventDeleteOneSchema: z.ZodType<Prisma.AgreementEventDeleteArgs> = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), where: AgreementEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementEventDeleteArgs>;

export const AgreementEventDeleteOneZodSchema = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), where: AgreementEventWhereUniqueInputObjectSchema }).strict();