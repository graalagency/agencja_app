import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendUpdateManyMutationInputObjectSchema as TaxResidenceSendUpdateManyMutationInputObjectSchema } from './objects/TaxResidenceSendUpdateManyMutationInput.schema';
import { TaxResidenceSendWhereInputObjectSchema as TaxResidenceSendWhereInputObjectSchema } from './objects/TaxResidenceSendWhereInput.schema';

export const TaxResidenceSendUpdateManySchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyArgs> = z.object({ data: TaxResidenceSendUpdateManyMutationInputObjectSchema, where: TaxResidenceSendWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyArgs>;

export const TaxResidenceSendUpdateManyZodSchema = z.object({ data: TaxResidenceSendUpdateManyMutationInputObjectSchema, where: TaxResidenceSendWhereInputObjectSchema.optional() }).strict();