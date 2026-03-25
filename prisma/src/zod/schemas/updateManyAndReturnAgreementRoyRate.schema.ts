import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateSelectObjectSchema as AgreementRoyRateSelectObjectSchema } from './objects/AgreementRoyRateSelect.schema';
import { AgreementRoyRateUpdateManyMutationInputObjectSchema as AgreementRoyRateUpdateManyMutationInputObjectSchema } from './objects/AgreementRoyRateUpdateManyMutationInput.schema';
import { AgreementRoyRateWhereInputObjectSchema as AgreementRoyRateWhereInputObjectSchema } from './objects/AgreementRoyRateWhereInput.schema';

export const AgreementRoyRateUpdateManyAndReturnSchema: z.ZodType<Prisma.AgreementRoyRateUpdateManyAndReturnArgs> = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), data: AgreementRoyRateUpdateManyMutationInputObjectSchema, where: AgreementRoyRateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateManyAndReturnArgs>;

export const AgreementRoyRateUpdateManyAndReturnZodSchema = z.object({ select: AgreementRoyRateSelectObjectSchema.optional(), data: AgreementRoyRateUpdateManyMutationInputObjectSchema, where: AgreementRoyRateWhereInputObjectSchema.optional() }).strict();