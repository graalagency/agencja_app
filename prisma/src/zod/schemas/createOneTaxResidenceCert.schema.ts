import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './objects/TaxResidenceCertSelect.schema';
import { TaxResidenceCertIncludeObjectSchema as TaxResidenceCertIncludeObjectSchema } from './objects/TaxResidenceCertInclude.schema';
import { TaxResidenceCertCreateInputObjectSchema as TaxResidenceCertCreateInputObjectSchema } from './objects/TaxResidenceCertCreateInput.schema';
import { TaxResidenceCertUncheckedCreateInputObjectSchema as TaxResidenceCertUncheckedCreateInputObjectSchema } from './objects/TaxResidenceCertUncheckedCreateInput.schema';

export const TaxResidenceCertCreateOneSchema: z.ZodType<Prisma.TaxResidenceCertCreateArgs> = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), data: z.union([TaxResidenceCertCreateInputObjectSchema, TaxResidenceCertUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateArgs>;

export const TaxResidenceCertCreateOneZodSchema = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), data: z.union([TaxResidenceCertCreateInputObjectSchema, TaxResidenceCertUncheckedCreateInputObjectSchema]) }).strict();