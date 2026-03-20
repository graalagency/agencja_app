import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './objects/TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendCreateInputObjectSchema as TaxResidenceSendCreateInputObjectSchema } from './objects/TaxResidenceSendCreateInput.schema';
import { TaxResidenceSendUncheckedCreateInputObjectSchema as TaxResidenceSendUncheckedCreateInputObjectSchema } from './objects/TaxResidenceSendUncheckedCreateInput.schema';
import { TaxResidenceSendUpdateInputObjectSchema as TaxResidenceSendUpdateInputObjectSchema } from './objects/TaxResidenceSendUpdateInput.schema';
import { TaxResidenceSendUncheckedUpdateInputObjectSchema as TaxResidenceSendUncheckedUpdateInputObjectSchema } from './objects/TaxResidenceSendUncheckedUpdateInput.schema';

export const TaxResidenceSendUpsertOneSchema: z.ZodType<Prisma.TaxResidenceSendUpsertArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema, create: z.union([ TaxResidenceSendCreateInputObjectSchema, TaxResidenceSendUncheckedCreateInputObjectSchema ]), update: z.union([ TaxResidenceSendUpdateInputObjectSchema, TaxResidenceSendUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendUpsertArgs>;

export const TaxResidenceSendUpsertOneZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema, create: z.union([ TaxResidenceSendCreateInputObjectSchema, TaxResidenceSendUncheckedCreateInputObjectSchema ]), update: z.union([ TaxResidenceSendUpdateInputObjectSchema, TaxResidenceSendUncheckedUpdateInputObjectSchema ]) }).strict();