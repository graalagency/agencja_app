import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendCreateManyInputObjectSchema as TaxResidenceSendCreateManyInputObjectSchema } from './objects/TaxResidenceSendCreateManyInput.schema';

export const TaxResidenceSendCreateManyAndReturnSchema: z.ZodType<Prisma.TaxResidenceSendCreateManyAndReturnArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), data: z.union([ TaxResidenceSendCreateManyInputObjectSchema, z.array(TaxResidenceSendCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateManyAndReturnArgs>;

export const TaxResidenceSendCreateManyAndReturnZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), data: z.union([ TaxResidenceSendCreateManyInputObjectSchema, z.array(TaxResidenceSendCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();