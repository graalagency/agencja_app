import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './objects/AgreementAdvanceSelect.schema';
import { AgreementAdvanceIncludeObjectSchema as AgreementAdvanceIncludeObjectSchema } from './objects/AgreementAdvanceInclude.schema';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './objects/AgreementAdvanceWhereUniqueInput.schema';
import { AgreementAdvanceCreateInputObjectSchema as AgreementAdvanceCreateInputObjectSchema } from './objects/AgreementAdvanceCreateInput.schema';
import { AgreementAdvanceUncheckedCreateInputObjectSchema as AgreementAdvanceUncheckedCreateInputObjectSchema } from './objects/AgreementAdvanceUncheckedCreateInput.schema';
import { AgreementAdvanceUpdateInputObjectSchema as AgreementAdvanceUpdateInputObjectSchema } from './objects/AgreementAdvanceUpdateInput.schema';
import { AgreementAdvanceUncheckedUpdateInputObjectSchema as AgreementAdvanceUncheckedUpdateInputObjectSchema } from './objects/AgreementAdvanceUncheckedUpdateInput.schema';

export const AgreementAdvanceUpsertOneSchema: z.ZodType<Prisma.AgreementAdvanceUpsertArgs> = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), where: AgreementAdvanceWhereUniqueInputObjectSchema, create: z.union([ AgreementAdvanceCreateInputObjectSchema, AgreementAdvanceUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementAdvanceUpdateInputObjectSchema, AgreementAdvanceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceUpsertArgs>;

export const AgreementAdvanceUpsertOneZodSchema = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), where: AgreementAdvanceWhereUniqueInputObjectSchema, create: z.union([ AgreementAdvanceCreateInputObjectSchema, AgreementAdvanceUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementAdvanceUpdateInputObjectSchema, AgreementAdvanceUncheckedUpdateInputObjectSchema ]) }).strict();