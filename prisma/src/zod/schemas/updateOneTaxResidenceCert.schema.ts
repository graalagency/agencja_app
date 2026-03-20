import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './objects/TaxResidenceCertSelect.schema';
import { TaxResidenceCertIncludeObjectSchema as TaxResidenceCertIncludeObjectSchema } from './objects/TaxResidenceCertInclude.schema';
import { TaxResidenceCertUpdateInputObjectSchema as TaxResidenceCertUpdateInputObjectSchema } from './objects/TaxResidenceCertUpdateInput.schema';
import { TaxResidenceCertUncheckedUpdateInputObjectSchema as TaxResidenceCertUncheckedUpdateInputObjectSchema } from './objects/TaxResidenceCertUncheckedUpdateInput.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './objects/TaxResidenceCertWhereUniqueInput.schema';

export const TaxResidenceCertUpdateOneSchema: z.ZodType<Prisma.TaxResidenceCertUpdateArgs> = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), data: z.union([TaxResidenceCertUpdateInputObjectSchema, TaxResidenceCertUncheckedUpdateInputObjectSchema]), where: TaxResidenceCertWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateArgs>;

export const TaxResidenceCertUpdateOneZodSchema = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), data: z.union([TaxResidenceCertUpdateInputObjectSchema, TaxResidenceCertUncheckedUpdateInputObjectSchema]), where: TaxResidenceCertWhereUniqueInputObjectSchema }).strict();