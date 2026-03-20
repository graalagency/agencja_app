import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './objects/TaxResidenceSendWhereUniqueInput.schema';

export const TaxResidenceSendFindUniqueOrThrowSchema: z.ZodType<Prisma.TaxResidenceSendFindUniqueOrThrowArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendFindUniqueOrThrowArgs>;

export const TaxResidenceSendFindUniqueOrThrowZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict();