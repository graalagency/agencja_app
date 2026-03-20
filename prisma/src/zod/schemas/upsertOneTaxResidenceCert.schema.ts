import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './objects/TaxResidenceCertSelect.schema';
import { TaxResidenceCertIncludeObjectSchema as TaxResidenceCertIncludeObjectSchema } from './objects/TaxResidenceCertInclude.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './objects/TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertCreateInputObjectSchema as TaxResidenceCertCreateInputObjectSchema } from './objects/TaxResidenceCertCreateInput.schema';
import { TaxResidenceCertUncheckedCreateInputObjectSchema as TaxResidenceCertUncheckedCreateInputObjectSchema } from './objects/TaxResidenceCertUncheckedCreateInput.schema';
import { TaxResidenceCertUpdateInputObjectSchema as TaxResidenceCertUpdateInputObjectSchema } from './objects/TaxResidenceCertUpdateInput.schema';
import { TaxResidenceCertUncheckedUpdateInputObjectSchema as TaxResidenceCertUncheckedUpdateInputObjectSchema } from './objects/TaxResidenceCertUncheckedUpdateInput.schema';

export const TaxResidenceCertUpsertOneSchema: z.ZodType<Prisma.TaxResidenceCertUpsertArgs> = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), where: TaxResidenceCertWhereUniqueInputObjectSchema, create: z.union([ TaxResidenceCertCreateInputObjectSchema, TaxResidenceCertUncheckedCreateInputObjectSchema ]), update: z.union([ TaxResidenceCertUpdateInputObjectSchema, TaxResidenceCertUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertUpsertArgs>;

export const TaxResidenceCertUpsertOneZodSchema = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), where: TaxResidenceCertWhereUniqueInputObjectSchema, create: z.union([ TaxResidenceCertCreateInputObjectSchema, TaxResidenceCertUncheckedCreateInputObjectSchema ]), update: z.union([ TaxResidenceCertUpdateInputObjectSchema, TaxResidenceCertUncheckedUpdateInputObjectSchema ]) }).strict();