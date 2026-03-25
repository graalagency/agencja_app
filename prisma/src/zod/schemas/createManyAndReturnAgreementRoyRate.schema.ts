import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateCreateManyInputObjectSchema as AgreementRoyRateCreateManyInputObjectSchema } from './objects/AgreementRoyRateCreateManyInput.schema';

export const AgreementRoyRateCreateManyAndReturnSchema: z.ZodType<Prisma.AgreementRoyRateCreateManyAndReturnArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), data: z.union([ AgreementRoyRateCreateManyInputObjectSchema, z.array(AgreementRoyRateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateManyAndReturnArgs>;

export const AgreementRoyRateCreateManyAndReturnZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), data: z.union([ AgreementRoyRateCreateManyInputObjectSchema, z.array(AgreementRoyRateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();