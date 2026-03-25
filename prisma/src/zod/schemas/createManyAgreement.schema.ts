import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementCreateManyInputObjectSchema as AgreementCreateManyInputObjectSchema } from './objects/AgreementCreateManyInput.schema';

export const AgreementCreateManySchema: z.ZodType<Prisma.AgreementCreateManyArgs> = z.object({ data: z.union([ AgreementCreateManyInputObjectSchema, z.array(AgreementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementCreateManyArgs>;

export const AgreementCreateManyZodSchema = z.object({ data: z.union([ AgreementCreateManyInputObjectSchema, z.array(AgreementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();