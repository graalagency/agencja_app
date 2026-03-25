import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './objects/AgreementAdvanceSelect.schema';
import { AgreementAdvanceCreateManyInputObjectSchema as AgreementAdvanceCreateManyInputObjectSchema } from './objects/AgreementAdvanceCreateManyInput.schema';

export const AgreementAdvanceCreateManyAndReturnSchema: z.ZodType<Prisma.AgreementAdvanceCreateManyAndReturnArgs> = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), data: z.union([ AgreementAdvanceCreateManyInputObjectSchema, z.array(AgreementAdvanceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceCreateManyAndReturnArgs>;

export const AgreementAdvanceCreateManyAndReturnZodSchema = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), data: z.union([ AgreementAdvanceCreateManyInputObjectSchema, z.array(AgreementAdvanceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();