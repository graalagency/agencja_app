import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendIncludeObjectSchema as TaxResidenceSendIncludeObjectSchema } from './objects/TaxResidenceSendInclude.schema';
import { TaxResidenceSendCreateInputObjectSchema as TaxResidenceSendCreateInputObjectSchema } from './objects/TaxResidenceSendCreateInput.schema';
import { TaxResidenceSendUncheckedCreateInputObjectSchema as TaxResidenceSendUncheckedCreateInputObjectSchema } from './objects/TaxResidenceSendUncheckedCreateInput.schema';

export const TaxResidenceSendCreateOneSchema: z.ZodType<Prisma.TaxResidenceSendCreateArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), data: z.union([TaxResidenceSendCreateInputObjectSchema, TaxResidenceSendUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateArgs>;

export const TaxResidenceSendCreateOneZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), include: TaxResidenceSendIncludeObjectSchema.optional(), data: z.union([TaxResidenceSendCreateInputObjectSchema, TaxResidenceSendUncheckedCreateInputObjectSchema]) }).strict();