import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './objects/TaxResidenceCertSelect.schema';
import { TaxResidenceCertCreateManyInputObjectSchema as TaxResidenceCertCreateManyInputObjectSchema } from './objects/TaxResidenceCertCreateManyInput.schema';

export const TaxResidenceCertCreateManyAndReturnSchema: z.ZodType<Prisma.TaxResidenceCertCreateManyAndReturnArgs> = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), data: z.union([ TaxResidenceCertCreateManyInputObjectSchema, z.array(TaxResidenceCertCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateManyAndReturnArgs>;

export const TaxResidenceCertCreateManyAndReturnZodSchema = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), data: z.union([ TaxResidenceCertCreateManyInputObjectSchema, z.array(TaxResidenceCertCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();