import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';
import { AgreementRightCreateInputObjectSchema as AgreementRightCreateInputObjectSchema } from './objects/AgreementRightCreateInput.schema';
import { AgreementRightUncheckedCreateInputObjectSchema as AgreementRightUncheckedCreateInputObjectSchema } from './objects/AgreementRightUncheckedCreateInput.schema';
import { AgreementRightUpdateInputObjectSchema as AgreementRightUpdateInputObjectSchema } from './objects/AgreementRightUpdateInput.schema';
import { AgreementRightUncheckedUpdateInputObjectSchema as AgreementRightUncheckedUpdateInputObjectSchema } from './objects/AgreementRightUncheckedUpdateInput.schema';

export const AgreementRightUpsertOneSchema: z.ZodType<Prisma.AgreementRightUpsertArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema, create: z.union([ AgreementRightCreateInputObjectSchema, AgreementRightUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementRightUpdateInputObjectSchema, AgreementRightUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgreementRightUpsertArgs>;

export const AgreementRightUpsertOneZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema, create: z.union([ AgreementRightCreateInputObjectSchema, AgreementRightUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementRightUpdateInputObjectSchema, AgreementRightUncheckedUpdateInputObjectSchema ]) }).strict();