import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceCertSelectObjectSchema as TaxResidenceCertSelectObjectSchema } from './objects/TaxResidenceCertSelect.schema';
import { TaxResidenceCertIncludeObjectSchema as TaxResidenceCertIncludeObjectSchema } from './objects/TaxResidenceCertInclude.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './objects/TaxResidenceCertWhereUniqueInput.schema';

export const TaxResidenceCertFindUniqueOrThrowSchema: z.ZodType<Prisma.TaxResidenceCertFindUniqueOrThrowArgs> = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), where: TaxResidenceCertWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaxResidenceCertFindUniqueOrThrowArgs>;

export const TaxResidenceCertFindUniqueOrThrowZodSchema = z.object({ select: TaxResidenceCertSelectObjectSchema.optional(), include: TaxResidenceCertIncludeObjectSchema.optional(), where: TaxResidenceCertWhereUniqueInputObjectSchema }).strict();