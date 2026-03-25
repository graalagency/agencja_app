import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './objects/AgreementEventSelect.schema';
import { AgreementEventIncludeObjectSchema as AgreementEventIncludeObjectSchema } from './objects/AgreementEventInclude.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './objects/AgreementEventWhereUniqueInput.schema';
import { AgreementEventCreateInputObjectSchema as AgreementEventCreateInputObjectSchema } from './objects/AgreementEventCreateInput.schema';
import { AgreementEventUncheckedCreateInputObjectSchema as AgreementEventUncheckedCreateInputObjectSchema } from './objects/AgreementEventUncheckedCreateInput.schema';
import { AgreementEventUpdateInputObjectSchema as AgreementEventUpdateInputObjectSchema } from './objects/AgreementEventUpdateInput.schema';
import { AgreementEventUncheckedUpdateInputObjectSchema as AgreementEventUncheckedUpdateInputObjectSchema } from './objects/AgreementEventUncheckedUpdateInput.schema';

export const AgreementEventUpsertOneSchema: z.ZodType<Prisma.AgreementEventUpsertArgs> = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), where: AgreementEventWhereUniqueInputObjectSchema, create: z.union([ AgreementEventCreateInputObjectSchema, AgreementEventUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementEventUpdateInputObjectSchema, AgreementEventUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgreementEventUpsertArgs>;

export const AgreementEventUpsertOneZodSchema = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), where: AgreementEventWhereUniqueInputObjectSchema, create: z.union([ AgreementEventCreateInputObjectSchema, AgreementEventUncheckedCreateInputObjectSchema ]), update: z.union([ AgreementEventUpdateInputObjectSchema, AgreementEventUncheckedUpdateInputObjectSchema ]) }).strict();