import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateWhereInputObjectSchema as AgreementRoyRateWhereInputObjectSchema } from './objects/AgreementRoyRateWhereInput.schema';

export const AgreementRoyRateDeleteManySchema: z.ZodType<Prisma.AgreementRoyRateDeleteManyArgs> = z.object({ where: AgreementRoyRateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateDeleteManyArgs>;

export const AgreementRoyRateDeleteManyZodSchema = z.object({ where: AgreementRoyRateWhereInputObjectSchema.optional() }).strict();