import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRoyRateUpdateManyMutationInputObjectSchema as AgreementRoyRateUpdateManyMutationInputObjectSchema } from './objects/AgreementRoyRateUpdateManyMutationInput.schema';
import { AgreementRoyRateWhereInputObjectSchema as AgreementRoyRateWhereInputObjectSchema } from './objects/AgreementRoyRateWhereInput.schema';

export const AgreementRoyRateUpdateManySchema: z.ZodType<Prisma.AgreementRoyRateUpdateManyArgs> = z.object({ data: AgreementRoyRateUpdateManyMutationInputObjectSchema, where: AgreementRoyRateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateManyArgs>;

export const AgreementRoyRateUpdateManyZodSchema = z.object({ data: AgreementRoyRateUpdateManyMutationInputObjectSchema, where: AgreementRoyRateWhereInputObjectSchema.optional() }).strict();