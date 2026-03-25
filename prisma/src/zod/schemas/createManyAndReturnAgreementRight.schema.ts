import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightCreateManyInputObjectSchema as AgreementRightCreateManyInputObjectSchema } from './objects/AgreementRightCreateManyInput.schema';

export const AgreementRightCreateManyAndReturnSchema: z.ZodType<Prisma.AgreementRightCreateManyAndReturnArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), data: z.union([ AgreementRightCreateManyInputObjectSchema, z.array(AgreementRightCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightCreateManyAndReturnArgs>;

export const AgreementRightCreateManyAndReturnZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), data: z.union([ AgreementRightCreateManyInputObjectSchema, z.array(AgreementRightCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();