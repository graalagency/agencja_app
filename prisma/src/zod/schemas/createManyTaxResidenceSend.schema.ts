import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendCreateManyInputObjectSchema as TaxResidenceSendCreateManyInputObjectSchema } from './objects/TaxResidenceSendCreateManyInput.schema';

export const TaxResidenceSendCreateManySchema: z.ZodType<Prisma.TaxResidenceSendCreateManyArgs> = z.object({ data: z.union([ TaxResidenceSendCreateManyInputObjectSchema, z.array(TaxResidenceSendCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateManyArgs>;

export const TaxResidenceSendCreateManyZodSchema = z.object({ data: z.union([ TaxResidenceSendCreateManyInputObjectSchema, z.array(TaxResidenceSendCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();