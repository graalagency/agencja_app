import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './objects/TaxResidenceCertWhereInput.schema';

export const TaxResidenceCertDeleteManySchema: z.ZodType<Prisma.TaxResidenceCertDeleteManyArgs> = z.object({ where: TaxResidenceCertWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertDeleteManyArgs>;

export const TaxResidenceCertDeleteManyZodSchema = z.object({ where: TaxResidenceCertWhereInputObjectSchema.optional() }).strict();