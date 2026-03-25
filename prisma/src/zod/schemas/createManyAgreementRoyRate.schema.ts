import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateCreateManyInputObjectSchema as AgreementRoyRateCreateManyInputObjectSchema } from './objects/AgreementRoyRateCreateManyInput.schema';

export const AgreementRoyRateCreateManySchema: z.ZodType<Prisma.AgreementRoyRateCreateManyArgs> = z.object({ data: z.union([ AgreementRoyRateCreateManyInputObjectSchema, z.array(AgreementRoyRateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateManyArgs>;

export const AgreementRoyRateCreateManyZodSchema = z.object({ data: z.union([ AgreementRoyRateCreateManyInputObjectSchema, z.array(AgreementRoyRateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();