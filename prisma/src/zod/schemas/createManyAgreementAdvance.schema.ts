import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceCreateManyInputObjectSchema as AgreementAdvanceCreateManyInputObjectSchema } from './objects/AgreementAdvanceCreateManyInput.schema';

export const AgreementAdvanceCreateManySchema: z.ZodType<Prisma.AgreementAdvanceCreateManyArgs> = z.object({ data: z.union([ AgreementAdvanceCreateManyInputObjectSchema, z.array(AgreementAdvanceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceCreateManyArgs>;

export const AgreementAdvanceCreateManyZodSchema = z.object({ data: z.union([ AgreementAdvanceCreateManyInputObjectSchema, z.array(AgreementAdvanceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();