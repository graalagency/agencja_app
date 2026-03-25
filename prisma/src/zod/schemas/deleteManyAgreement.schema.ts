import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './objects/AgreementWhereInput.schema';

export const AgreementDeleteManySchema: z.ZodType<Prisma.AgreementDeleteManyArgs> = z.object({ where: AgreementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementDeleteManyArgs>;

export const AgreementDeleteManyZodSchema = z.object({ where: AgreementWhereInputObjectSchema.optional() }).strict();