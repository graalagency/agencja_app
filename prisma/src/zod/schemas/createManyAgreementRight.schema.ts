import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightCreateManyInputObjectSchema as AgreementRightCreateManyInputObjectSchema } from './objects/AgreementRightCreateManyInput.schema';

export const AgreementRightCreateManySchema: z.ZodType<Prisma.AgreementRightCreateManyArgs> = z.object({ data: z.union([ AgreementRightCreateManyInputObjectSchema, z.array(AgreementRightCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightCreateManyArgs>;

export const AgreementRightCreateManyZodSchema = z.object({ data: z.union([ AgreementRightCreateManyInputObjectSchema, z.array(AgreementRightCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();