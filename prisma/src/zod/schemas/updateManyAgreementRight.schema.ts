import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightUpdateManyMutationInputObjectSchema as AgreementRightUpdateManyMutationInputObjectSchema } from './objects/AgreementRightUpdateManyMutationInput.schema';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './objects/AgreementRightWhereInput.schema';

export const AgreementRightUpdateManySchema: z.ZodType<Prisma.AgreementRightUpdateManyArgs> = z.object({ data: AgreementRightUpdateManyMutationInputObjectSchema, where: AgreementRightWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightUpdateManyArgs>;

export const AgreementRightUpdateManyZodSchema = z.object({ data: AgreementRightUpdateManyMutationInputObjectSchema, where: AgreementRightWhereInputObjectSchema.optional() }).strict();