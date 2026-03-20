import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertCreateManyInputObjectSchema as TaxResidenceCertCreateManyInputObjectSchema } from './objects/TaxResidenceCertCreateManyInput.schema';

export const TaxResidenceCertCreateManySchema: z.ZodType<Prisma.TaxResidenceCertCreateManyArgs> = z.object({ data: z.union([ TaxResidenceCertCreateManyInputObjectSchema, z.array(TaxResidenceCertCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateManyArgs>;

export const TaxResidenceCertCreateManyZodSchema = z.object({ data: z.union([ TaxResidenceCertCreateManyInputObjectSchema, z.array(TaxResidenceCertCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();