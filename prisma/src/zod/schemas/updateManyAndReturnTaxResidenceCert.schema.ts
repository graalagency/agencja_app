import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './objects/TaxResidenceCertSelect.schema';
import { TaxResidenceCertUpdateManyMutationInputObjectSchema as TaxResidenceCertUpdateManyMutationInputObjectSchema } from './objects/TaxResidenceCertUpdateManyMutationInput.schema';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './objects/TaxResidenceCertWhereInput.schema';

export const TaxResidenceCertUpdateManyAndReturnSchema: z.ZodType<Prisma.TaxResidenceCertUpdateManyAndReturnArgs> = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), data: TaxResidenceCertUpdateManyMutationInputObjectSchema, where: TaxResidenceCertWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateManyAndReturnArgs>;

export const TaxResidenceCertUpdateManyAndReturnZodSchema = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), data: TaxResidenceCertUpdateManyMutationInputObjectSchema, where: TaxResidenceCertWhereInputObjectSchema.optional() }).strict();