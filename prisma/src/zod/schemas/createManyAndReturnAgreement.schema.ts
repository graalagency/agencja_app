import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementCreateManyInputObjectSchema as AgreementCreateManyInputObjectSchema } from './objects/AgreementCreateManyInput.schema';

export const AgreementCreateManyAndReturnSchema: z.ZodType<Prisma.AgreementCreateManyAndReturnArgs> = z.object({ select: AgreementSelectObjectSchema.optional(), data: z.union([ AgreementCreateManyInputObjectSchema, z.array(AgreementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementCreateManyAndReturnArgs>;

export const AgreementCreateManyAndReturnZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(), data: z.union([ AgreementCreateManyInputObjectSchema, z.array(AgreementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();