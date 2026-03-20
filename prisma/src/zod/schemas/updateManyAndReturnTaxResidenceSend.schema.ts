import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaxResidenceSendSelectObjectSchema as TaxResidenceSendSelectObjectSchema } from './objects/TaxResidenceSendSelect.schema';
import { TaxResidenceSendUpdateManyMutationInputObjectSchema as TaxResidenceSendUpdateManyMutationInputObjectSchema } from './objects/TaxResidenceSendUpdateManyMutationInput.schema';
import { TaxResidenceSendWhereInputObjectSchema as TaxResidenceSendWhereInputObjectSchema } from './objects/TaxResidenceSendWhereInput.schema';

export const TaxResidenceSendUpdateManyAndReturnSchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyAndReturnArgs> = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), data: TaxResidenceSendUpdateManyMutationInputObjectSchema, where: TaxResidenceSendWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyAndReturnArgs>;

export const TaxResidenceSendUpdateManyAndReturnZodSchema = z.object({ select: TaxResidenceSendSelectObjectSchema.optional(), data: TaxResidenceSendUpdateManyMutationInputObjectSchema, where: TaxResidenceSendWhereInputObjectSchema.optional() }).strict();