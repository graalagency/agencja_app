import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './objects/AgreementEventWhereInput.schema';

export const AgreementEventDeleteManySchema: z.ZodType<Prisma.AgreementEventDeleteManyArgs> = z.object({ where: AgreementEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventDeleteManyArgs>;

export const AgreementEventDeleteManyZodSchema = z.object({ where: AgreementEventWhereInputObjectSchema.optional() }).strict();