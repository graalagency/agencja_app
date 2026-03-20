import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './objects/TaxResidenceSendWhereUniqueInput.schema';

export const TaxResidenceSendFindUniqueSchema: z.ZodType<Prisma.TaxResidenceSendFindUniqueArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendFindUniqueArgs>;

export const TaxResidenceSendFindUniqueZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict();