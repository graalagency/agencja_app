import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './objects/AgreementEventSelect.schema';
import { AgreementEventIncludeObjectSchema as AgreementEventIncludeObjectSchema } from './objects/AgreementEventInclude.schema';
import { AgreementEventUpdateInputObjectSchema as AgreementEventUpdateInputObjectSchema } from './objects/AgreementEventUpdateInput.schema';
import { AgreementEventUncheckedUpdateInputObjectSchema as AgreementEventUncheckedUpdateInputObjectSchema } from './objects/AgreementEventUncheckedUpdateInput.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './objects/AgreementEventWhereUniqueInput.schema';

export const AgreementEventUpdateOneSchema: z.ZodType<Prisma.AgreementEventUpdateArgs> = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), data: z.union([AgreementEventUpdateInputObjectSchema, AgreementEventUncheckedUpdateInputObjectSchema]), where: AgreementEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementEventUpdateArgs>;

export const AgreementEventUpdateOneZodSchema = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), data: z.union([AgreementEventUpdateInputObjectSchema, AgreementEventUncheckedUpdateInputObjectSchema]), where: AgreementEventWhereUniqueInputObjectSchema }).strict();