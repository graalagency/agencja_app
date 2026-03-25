import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementIncludeObjectSchema as AgreementIncludeObjectSchema } from './objects/AgreementInclude.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';
import { AgreementCreateInputObjectSchema as AgreementCreateInputObjectSchema } from './objects/AgreementCreateInput.schema';
import { AgreementUncheckedCreateInputObjectSchema as AgreementUncheckedCreateInputObjectSchema } from './objects/AgreementUncheckedCreateInput.schema';
import { AgreementUpdateInputObjectSchema as AgreementUpdateInputObjectSchema } from './objects/AgreementUpdateInput.schema';
import { AgreementUncheckedUpdateInputObjectSchema as AgreementUncheckedUpdateInputObjectSchema } from './objects/AgreementUncheckedUpdateInput.schema';

export const AgreementUpsertOneSchema: z.ZodType<Prisma.AgreementUpsertArgs> = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), where: AgreementWhereUniqueInputObjectSchema, create: z.union([ AgreementCreateInputObjectSchema, AgreementUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementUpdateInputObjectSchema, AgreementUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgreementUpsertArgs>;

export const AgreementUpsertOneZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(), include: AgreementIncludeObjectSchema.optional(), where: AgreementWhereUniqueInputObjectSchema, create: z.union([ AgreementCreateInputObjectSchema, AgreementUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementUpdateInputObjectSchema, AgreementUncheckedUpdateInputObjectSchema ]) }).strict();