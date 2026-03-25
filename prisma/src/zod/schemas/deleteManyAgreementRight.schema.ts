import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './objects/AgreementRightWhereInput.schema';

export const AgreementRightDeleteManySchema: z.ZodType<Prisma.AgreementRightDeleteManyArgs> = z.object({ where: AgreementRightWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightDeleteManyArgs>;

export const AgreementRightDeleteManyZodSchema = z.object({ where: AgreementRightWhereInputObjectSchema.optional() }).strict();