import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendUpdateInputObjectSchema as TaxResidenceSendUpdateInputObjectSchema } from './objects/TaxResidenceSendUpdateInput.schema';
import { TaxResidenceSendUncheckedUpdateInputObjectSchema as TaxResidenceSendUncheckedUpdateInputObjectSchema } from './objects/TaxResidenceSendUncheckedUpdateInput.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './objects/TaxResidenceSendWhereUniqueInput.schema';

export const TaxResidenceSendUpdateOneSchema: z.ZodType<Prisma.TaxResidenceSendUpdateArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), data: z.union([TaxResidenceSendUpdateInputObjectSchema, TaxResidenceSendUncheckedUpdateInputObjectSchema]), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateArgs>;

export const TaxResidenceSendUpdateOneZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), data: z.union([TaxResidenceSendUpdateInputObjectSchema, TaxResidenceSendUncheckedUpdateInputObjectSchema]), where: TaxResidenceSendWhereUniqueInputObjectSchema }).strict();