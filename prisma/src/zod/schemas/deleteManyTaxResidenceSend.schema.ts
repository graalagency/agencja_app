import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendWhereInputObjectSchema as TaxResidenceSendWhereInputObjectSchema } from './objects/TaxResidenceSendWhereInput.schema';

export const TaxResidenceSendDeleteManySchema: z.ZodType<Prisma.TaxResidenceSendDeleteManyArgs> = z.object({ where: TaxResidenceSendWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendDeleteManyArgs>;

export const TaxResidenceSendDeleteManyZodSchema = z.object({ where: TaxResidenceSendWhereInputObjectSchema.optional() }).strict();