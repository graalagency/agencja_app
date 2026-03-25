import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventCreateManyInputObjectSchema as AgreementEventCreateManyInputObjectSchema } from './objects/AgreementEventCreateManyInput.schema';

export const AgreementEventCreateManySchema: z.ZodType<Prisma.AgreementEventCreateManyArgs> = z.object({ data: z.union([ AgreementEventCreateManyInputObjectSchema, z.array(AgreementEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventCreateManyArgs>;

export const AgreementEventCreateManyZodSchema = z.object({ data: z.union([ AgreementEventCreateManyInputObjectSchema, z.array(AgreementEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();