import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './objects/TaxResidenceSendWhereUniqueInput.schema';

export const TaxResidenceSendDeleteOneSchema: z.ZodType<Prisma.TaxResidenceSendDeleteArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendDeleteArgs>;

export const TaxResidenceSendDeleteOneZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict();