import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './objects/AgreementEventSelect.schema';
import { AgreementEventCreateManyInputObjectSchema as AgreementEventCreateManyInputObjectSchema } from './objects/AgreementEventCreateManyInput.schema';

export const AgreementEventCreateManyAndReturnSchema: z.ZodType<Prisma.AgreementEventCreateManyAndReturnArgs> = z.object({ select: AgreementEventSelectObjectSchema.optional(), data: z.union([ AgreementEventCreateManyInputObjectSchema, z.array(AgreementEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventCreateManyAndReturnArgs>;

export const AgreementEventCreateManyAndReturnZodSchema = z.object({ select: AgreementEventSelectObjectSchema.optional(), data: z.union([ AgreementEventCreateManyInputObjectSchema, z.array(AgreementEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();