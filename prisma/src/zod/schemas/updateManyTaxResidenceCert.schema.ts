import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertUpdateManyMutationInputObjectSchema as TaxResidenceCertUpdateManyMutationInputObjectSchema } from './objects/TaxResidenceCertUpdateManyMutationInput.schema';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './objects/TaxResidenceCertWhereInput.schema';

export const TaxResidenceCertUpdateManySchema: z.ZodType<Prisma.TaxResidenceCertUpdateManyArgs> = z.object({ data: TaxResidenceCertUpdateManyMutationInputObjectSchema, where: TaxResidenceCertWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateManyArgs>;

export const TaxResidenceCertUpdateManyZodSchema = z.object({ data: TaxResidenceCertUpdateManyMutationInputObjectSchema, where: TaxResidenceCertWhereInputObjectSchema.optional() }).strict();