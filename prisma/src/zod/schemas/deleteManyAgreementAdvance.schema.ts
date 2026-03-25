import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceWhereInputObjectSchema as AgreementAdvanceWhereInputObjectSchema } from './objects/AgreementAdvanceWhereInput.schema';

export const AgreementAdvanceDeleteManySchema: z.ZodType<Prisma.AgreementAdvanceDeleteManyArgs> = z.object({ where: AgreementAdvanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceDeleteManyArgs>;

export const AgreementAdvanceDeleteManyZodSchema = z.object({ where: AgreementAdvanceWhereInputObjectSchema.optional() }).strict();